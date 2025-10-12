import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.server';
import { RedditPost } from '@reddit-comments/schemas';

@Injectable()
export class RedditInsertService {
  constructor(private prisma: PrismaService) {}

  async upsertPost(post: RedditPost) {
    return this.prisma.posts.upsert({
      where: { redditId: post.id },
      update: {},
      create: {
        redditId: post.id,
        text: post.selftext,
        url: post.url,
        subreddit: post.subreddit || 'unknown',
        createdAt: new Date(),
      },
    });
  }
}
