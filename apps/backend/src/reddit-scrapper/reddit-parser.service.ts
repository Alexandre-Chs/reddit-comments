import { Injectable } from '@nestjs/common';
import type { RedditPostData } from '@reddit-comments/schemas';

@Injectable()
export class RedditParserService {
  async redditParser(data: RedditPostData) {
    const posts = data.data.children.map((post) => ({
      id: post.data.id,
      selftext: post.data.selftext,
      url: post.data.url,
      subreddit: post.data.subreddit,
    }));

    return posts;
  }
}
