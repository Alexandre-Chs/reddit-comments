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

  async addUser(username: string, email: string, password: string) {
    const passwordHash = bcrypt.hashSync(password, 10);
    return await this.prisma.users.create({
      data: {
        username,
        email,
        password: passwordHash,
      },
    });
  }

  async getUserById(id: string) {
    return await this.prisma.users.findUnique({
      where: { id },
    });
  }

  async getUserRegister(email: string, password: string) {
    const user = await this.prisma.users.findUnique({
      where: { email },
    });
    if (!user) return null;

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return null;

    return user;
  }

  async getTeamsByUserId(userId: string) {
    return await this.prisma.teams.findMany({
      where: {
        users: {
          some: {
            userId: userId,
          },
        },
      },
    });
  }
}
