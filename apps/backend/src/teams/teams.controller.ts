import { Body, Controller, Get, Post, Session, UsePipes } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { ZodValidationPipe } from 'src/zod/ZodValidationPipe';
import {
  teamActiveSchema,
  teamCreateSchema,
  teamUserAddSchema,
} from '@reddit-comments/schemas';
import type { ActiveTeamDTO, TeamCreateDTO, UserTeamAddDTO } from './teams.dto';

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

  @Post('add-user')
  @UsePipes(new ZodValidationPipe(teamUserAddSchema))
  async addUserToTeam(
    @Body() userTeamAddDTO: UserTeamAddDTO,
    @Session() session,
  ) {
    const response = await this.teamsService.userTeamAdd(
      userTeamAddDTO.email,
      session.activeTeamId,
    );

    if (response.ok) return { message: response.message, ok: true };
    return { errors: [{ message: response.message }], ok: false };
  }

  @Get('users')
  async teamUsers(@Session() session) {
    const users = await this.teamsService.teamUsers(session.activeTeamId);

    return { users, ok: true };
  }
}
