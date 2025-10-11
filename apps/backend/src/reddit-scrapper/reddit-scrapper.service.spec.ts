import { Test, TestingModule } from '@nestjs/testing';
import { RedditScrapperService } from './reddit-scrapper.service';

describe('RedditScrapperService', () => {
  let service: RedditScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedditScrapperService],
    }).compile();

    service = module.get<RedditScrapperService>(RedditScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
