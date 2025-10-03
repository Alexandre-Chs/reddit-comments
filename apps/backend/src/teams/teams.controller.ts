import { Body, Controller, Post, Session, UsePipes } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { ZodValidationPipe } from 'src/zod/ZodValidationPipe';
import { teamCreateSchema } from '@reddit-comments/schemas';
import type { teamCreateDTO } from './teams.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(teamCreateSchema))
  async createTeam(@Body() teamDTO: teamCreateDTO, @Session() session) {
    const team = await this.teamsService.teamCreate(
      teamDTO.teamName,
      session.userId,
    );

    return { team, message: 'Team created', ok: true };
  }
}
