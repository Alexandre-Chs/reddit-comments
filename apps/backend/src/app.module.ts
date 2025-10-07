import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { PrismaService } from './prisma.server';
import { AuthService } from './auth/auth.service';
import { TeamsModule } from './teams/teams.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from './cron/cron.service';

@Module({
  imports: [ConfigModule.forRoot(), TeamsModule, ScheduleModule.forRoot()],
  controllers: [AppController, AuthController],
  providers: [AppService, PrismaService, AuthService, CronService],
})
export class AppModule {}
