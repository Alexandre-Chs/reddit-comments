import { z } from "zod";

export const redditPostSchema = z.object({
  id: z.string(),
  selftext: z.string(),
  url: z.string(),
  subreddit: z.string().optional(),
});

export const redditPostDataSchema = z.object({
  kind: z.string(),
  data: z
    .object({
      children: z.array(
        z.object({
          kind: z.string(),
          data: redditPostSchema,
        })
      ),
      before: z.string().nullable(),
    })
    .passthrough(),
});

export type RedditPostData = z.infer<typeof redditPostDataSchema>;
export type RedditPost = z.infer<typeof redditPostSchema>;
