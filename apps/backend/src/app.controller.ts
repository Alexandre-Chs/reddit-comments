import { Controller, Get, Post, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.appService.listUsers();
  }

  @Post()
  createUser(): Promise<User> {
    return this.appService.createTestUser();
  }

  @Get('test-session')
  testSession(@Session() session: Record<string, any>) {
    session.views = (session.views || 0) + 1;
    return { views: session.views };
  }
}
