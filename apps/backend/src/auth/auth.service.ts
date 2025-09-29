import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.server';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async getUser(username: string, email: string) {
    return await this.prisma.users.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });
  }

  async addUserAndTeam(
    username: string,
    email: string,
    password: string,
    teamName: string,
  ) {
    const passwordHash = bcrypt.hashSync(password, 10);
    const user = await this.prisma.users.create({
      data: {
        username,
        email,
        password: passwordHash,
      },
    });

    let team = await this.prisma.teams.findFirst({
      where: { name: teamName },
    });

    if (!team) {
      team = await this.prisma.teams.create({
        data: {
          name: teamName,
        },
      });
    }

    await this.prisma.usersTeams.create({
      data: {
        userId: user.id,
        teamId: team.id,
      },
    });
  }
}
