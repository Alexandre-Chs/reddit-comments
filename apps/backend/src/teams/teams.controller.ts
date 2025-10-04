import { Body, Controller, Post, Session, UsePipes } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { ZodValidationPipe } from 'src/zod/ZodValidationPipe';
import { teamActiveSchema, teamCreateSchema } from '@reddit-comments/schemas';
import type { ActiveTeamDTO, TeamCreateDTO } from './teams.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(teamCreateSchema))
  async createTeam(@Body() teamDTO: TeamCreateDTO, @Session() session) {
    const team = await this.teamsService.teamCreate(
      teamDTO.teamName,
      session.userId,
    );

    return { team, message: 'Team created', ok: true };
  }

  @Post('active')
  @UsePipes(new ZodValidationPipe(teamActiveSchema))
  async activeTeam(@Body() activeTeamDTO: ActiveTeamDTO, @Session() session) {
    const teamExist = this.teamsService.teamExist(activeTeamDTO.teamId);
    if (!teamExist) return { message: 'Team not found', ok: false };

    session.activeTeamId = activeTeamDTO.teamId;

    return { message: 'Team active switched', ok: true };
  }
}
