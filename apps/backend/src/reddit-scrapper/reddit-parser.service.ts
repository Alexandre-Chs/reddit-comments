import { Injectable } from '@nestjs/common';
import type { RedditPostData } from '@reddit-comments/schemas';

@Injectable()
export class RedditParserService {
  async redditParser(data: RedditPostData) {
    console.log('les datas recus sont', data);
  }
}
