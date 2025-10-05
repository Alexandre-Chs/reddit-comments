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
}
