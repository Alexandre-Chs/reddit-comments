import { Injectable } from '@nestjs/common';
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
}
