import { Body, Controller, Get, Post, Session, UsePipes } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { ZodValidationPipe } from 'src/zod/ZodValidationPipe';
import {
  teamActiveSchema,
  teamCreateSchema,
  teamKeywordAddSchema,
  teamKeywordToggleStatusSchema,
  teamUserAddSchema,
} from '@reddit-comments/schemas';
import type {
  ActiveTeamDTO,
  TeamCreateDTO,
  TeamKeywordAddDTO,
  UserTeamAddDTO,
} from './teams.dto';

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

  @Get('keywords')
  async teamKeywords(@Session() session) {
    const teamId = session.activeTeamId;
    if (!teamId) return { keywords: [], ok: true };

    const keywords = await this.teamsService.teamKeywords(teamId);

    return { keywords, ok: true };
  }

  @Post('keywords')
  @UsePipes(new ZodValidationPipe(teamKeywordAddSchema))
  async teamKeywordAdd(
    @Body() keywordAddDTO: TeamKeywordAddDTO,
    @Session() session,
  ) {
    const teamId = session.activeTeamId;
    if (!teamId) return { errors: [{ message: 'No active team' }], ok: false };

    const keywordAdd = await this.teamsService.teamKeywordAdd(
      teamId,
      keywordAddDTO.keyword,
    );

    return { ok: true, message: 'Keyword added', keyword: keywordAdd };
  }

  @Post('keywords/status')
  @UsePipes(new ZodValidationPipe(teamKeywordToggleStatusSchema))
  async teamKeywordToggleStatus(
    @Body()
    keywordToggleStatusDTO: {
      keywordId: string;
      status: 'ACTIVE' | 'INACTIVE';
    },
    @Session() session,
  ) {
    const teamId = session.activeTeamId;
    if (!teamId) return { errors: [{ message: 'No active team' }], ok: false };

    await this.teamsService.teamKeywordToggleStatus(
      teamId,
      keywordToggleStatusDTO.keywordId,
    );

    return { ok: true, message: 'Keyword status toggled' };
  }

  @Get('posts')
  async teamPosts(@Session() session) {
    const teamId = session.activeTeamId;
    if (!teamId) return { errors: [{ message: 'No active team' }], ok: false };

    const posts = await this.teamsService.teamPosts(teamId);

    return { posts, ok: true };
  }
}
