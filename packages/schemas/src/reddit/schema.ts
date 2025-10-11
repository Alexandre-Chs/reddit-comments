import { z } from "zod";

export const redditPostDataSchema = z
  .object({
    id: z.string(),
    author: z.string(),
    subreddit: z.string(),
    permalink: z.string(),
    url: z.string(),
    created_utc: z.number(),

    // Champs optionnels mais utiles
    title: z.string().optional(),
    selftext: z.string().optional(),
    subreddit_name_prefixed: z.string().optional(),
    num_comments: z.number().optional(),
    score: z.number().optional(),
    upvote_ratio: z.number().optional(),
    is_self: z.boolean().optional(),
    is_video: z.boolean().optional(),
    over_18: z.boolean().optional(),
  })
  .passthrough();

export const redditChildSchema = z.object({
  kind: z.string(),
  data: redditPostDataSchema,
});

export const redditSearchResponseSchema = z.object({
  kind: z.literal("Listing"),
  data: z.object({
    children: z.array(redditChildSchema),
    after: z.string().nullable(),
  }),
});

export type RedditPostData = z.infer<typeof redditPostDataSchema>;
export type RedditChild = z.infer<typeof redditChildSchema>;
export type RedditSearchResponse = z.infer<typeof redditSearchResponseSchema>;
