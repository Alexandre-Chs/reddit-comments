import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.server';
import { User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async createTestUser(): Promise<User> {
    return this.prisma.user.upsert({
      where: { email: 'test.user@example.com' },
      update: {},
      create: {
        email: 'test.user@example.com',
        name: 'Test User',
      },
    });
  }

  async listUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
