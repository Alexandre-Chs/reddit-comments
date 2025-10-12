import { Injectable } from '@nestjs/common';

@Injectable()
export class RedditScrapperService {
  async keywordPosts(keyword: string) {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${encodeURIComponent(keyword)}&sort=new`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const data = await response.json();
    return data;
  }
}
