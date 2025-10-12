import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma.server';
import { RedditInsertService } from 'src/reddit-scrapper/reddit-insert.service';
import { RedditParserService } from 'src/reddit-scrapper/reddit-parser.service';
import { RedditScrapperService } from 'src/reddit-scrapper/reddit-scrapper.service';

@Injectable()
export class CronService {
  constructor(
    private redditScrapper: RedditScrapperService,
    private redditParser: RedditParserService,
    private redditInsert: RedditInsertService,
    private prisma: PrismaService,
  ) {}

  private readonly logger = new Logger(CronService.name);

  @Cron('0 * * * * *')
  async handleCron() {
    this.logger.debug('Called every 5 minutes');

    const activeKeywords = await this.prisma.keywords.findMany({
      where: {
        teams: {
          some: {
            statut: 'ACTIVE',
          },
        },
      },
      select: { keyword: true },
    });
    const keywords = activeKeywords.map((ak) => ak.keyword);

    for (const keyword of keywords) {
      const teamsWithKeyword = await this.prisma.teamsKeywords.findMany({
        where: { keyword: { keyword }, statut: 'ACTIVE' },
        select: { teamId: true },
      });
      const teamIds = teamsWithKeyword.map((tk) => tk.teamId);

      const posts = await this.redditScrapper.keywordPosts(keyword);
      const parsedPosts = await this.redditParser.redditParser(posts);
      for (const post of parsedPosts) {
        const upsertedPost = await this.redditInsert.upsertPost(post);
        for (const teamId of teamIds) {
          await this.prisma.teamsPosts.upsert({
            where: { teamId_postId: { teamId, postId: upsertedPost.id } },
            update: {},
            create: { teamId, postId: upsertedPost.id },
          });
        }
      }
    }
  }
}
