import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { RedditParserService } from 'src/reddit-scrapper/reddit-parser.service';
import { RedditScrapperService } from 'src/reddit-scrapper/reddit-scrapper.service';

@Injectable()
export class CronService {
  constructor(
    private redditScrapper: RedditScrapperService,
    private redditParser: RedditParserService,
  ) {}

  private readonly logger = new Logger(CronService.name);

  @Cron('* * * * *')
  async handleCron() {
    this.logger.debug('Called every 10 seconds');
    const posts = await this.redditScrapper.keywordPosts('test');
    const parser = this.redditParser.redditParser(posts);
  }
}
