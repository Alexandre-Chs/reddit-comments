import { Controller, Get, Post } from '@nestjs/common';
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
}
