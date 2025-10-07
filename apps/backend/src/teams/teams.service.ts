import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.server';

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  async teamCreate(teamName: string, userId: string) {
    return await this.prisma.teams.create({
      data: {
        name: teamName,
        users: {
          create: {
            userId,
          },
        },
      },
    });
  }

  async teamExist(teamId: string) {
    return await this.prisma.teams.findUnique({
      where: { id: teamId },
    });
  }

  async userTeamAdd(email: string, teamId: string) {
    const user = await this.prisma.users.findUnique({
      where: { email },
    });
    if (!user)
      return {
        ok: false,
        message: 'User not found. They must create an account first',
      };

    const userInTeam = await this.prisma.usersTeams.findFirst({
      where: {
        userId: user.id,
        teamId,
      },
    });
    if (userInTeam)
      return { ok: false, message: 'User is already in the team' };

    await this.prisma.usersTeams.create({
      data: {
        userId: user.id,
        teamId,
      },
    });

    return { ok: true, message: 'User added to team' };
  }

  async teamUsers(teamId: string) {
    const usersTeams = await this.prisma.usersTeams.findMany({
      where: { teamId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
      },
    });

    return usersTeams.map((ut) => ut.user);
  }

  async teamKeywords(teamId: string) {
    const keywords = await this.prisma.teamsKeywords.findMany({
      where: { teamId },
      select: {
        keyword: true,
        statut: true,
      },
    });

    return keywords.map((k) => ({ ...k.keyword, statut: k.statut }));
  }

  async teamKeywordAdd(teamId: string, keyword: string) {
    let keywordCurrent = await this.prisma.keywords.findUnique({
      where: { keyword },
    });

    if (!keywordCurrent) {
      keywordCurrent = await this.prisma.keywords.create({
        data: { keyword },
      });
    }

    const keywordInTeam = await this.prisma.teamsKeywords.findFirst({
      where: {
        teamId,
        keywordId: keywordCurrent.id,
      },
    });

    if (!keywordInTeam) {
      await this.prisma.teamsKeywords.create({
        data: {
          teamId,
          keywordId: keywordCurrent.id,
        },
      });
    }
  }

  async teamKeywordToggleStatus(teamId: string, keywordId: string) {
    const keyword = await this.prisma.teamsKeywords.findFirst({
      where: {
        teamId,
        keywordId,
      },
    });

    if (!keyword) throw new NotFoundException('Keyword not found in team');

    await this.prisma.teamsKeywords.update({
      where: { id: keyword.id },
      data: { statut: keyword.statut === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE' },
    });
  }
}
