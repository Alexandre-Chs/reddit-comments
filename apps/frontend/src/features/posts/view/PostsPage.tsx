import { useQuery } from "@tanstack/react-query";
import { postsTeam } from "../api/posts";
import { DateTime } from "luxon";

type Post = {
  id: string;
  redditId: string;
  url: string;
  text: string;
  subreddit: string;
  createdAt: string;
  statut: "PENDING" | "DONE";
};

const PostsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["team-posts"],
    queryFn: postsTeam,
  });

  const posts: Post[] = data?.posts || [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-sm text-muted-foreground">Loading posts...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <p className="text-sm text-muted-foreground">
          {posts.length} post{posts.length !== 1 ? "s" : ""} total
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-3">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sm text-muted-foreground">No posts yet. Posts will appear here when keywords match Reddit content.</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      post.statut === "DONE"
                        ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                        : "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                    }`}
                  >
                    {post.statut.toLowerCase()}
                  </span>
                </div>

                <div className="flex-1 min-w-0 space-y-2">
                  <p className="text-sm leading-relaxed line-clamp-10 break-words">{post.text}</p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>r/{post.subreddit}</span>
                    <span>•</span>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                    >
                      View on Reddit
                    </a>
                    <span>•</span>
                    <span>{DateTime.fromISO(post.createdAt).toFormat("MMM dd, yyyy")}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostsPage;
