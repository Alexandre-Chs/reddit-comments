import { useQuery, useQueryClient } from "@tanstack/react-query";
import { keywordsTeam, keywordTeamAdd } from "../api/keywords";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { DateTime } from "luxon";

type Keyword = {
  id: string;
  keyword: string;
  createdAt: string;
  statut: "ACTIVE" | "INACTIVE";
};

const KeywordsPage = () => {
  const [keyword, setKeyword] = useState("");

  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["team-keywords"],
    queryFn: keywordsTeam,
  });

  const keywords: Keyword[] = data?.keywords || [];

  const handleKeywordAdd = async () => {
    if (!keyword || keyword.trim() === "") return;
    const response = await keywordTeamAdd(keyword);

    if (response.ok) {
      toast.success(`Keyword "${keyword}" added successfully`);
      setKeyword("");
      queryClient.invalidateQueries({ queryKey: ["team-keywords"] });
    } else {
      toast.error("Failed to add keyword, please try again.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleKeywordAdd();
    }
  };

  const handleToggleStatus = async (keywordId: string, currentStatus: string) => {
    // TODO: Implement status toggle API call
    console.log("Toggle status for keyword:", keywordId, currentStatus);
    toast.info("Status toggle - API to be implemented");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-sm text-muted-foreground">Loading keywords...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Add Keyword */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Keywords</h1>
            <p className="text-xs text-muted-foreground mt-1">
              {keywords.length} keyword{keywords.length !== 1 ? "s" : ""} total
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Input type="text" placeholder="Add a new keyword..." onChange={(e) => setKeyword(e.target.value)} onKeyDown={handleKeyPress} value={keyword} className="flex-1" />
          <Button onClick={handleKeywordAdd} size="default">
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>

      {/* Keywords List */}
      <div className="border rounded-lg divide-y">
        {keywords.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-sm text-muted-foreground">No keywords yet. Add one to get started.</p>
          </div>
        ) : (
          keywords.map((kw) => (
            <div key={kw.id} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors group">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <button
                  onClick={() => handleToggleStatus(kw.id, kw.statut)}
                  className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full cursor-pointer transition-all hover:opacity-80 ${
                    kw.statut === "ACTIVE" ? "bg-green-500/10 text-green-700 dark:text-green-400" : "bg-red-500/10 text-red-700 dark:text-red-400"
                  }`}
                  aria-label={`Toggle status for ${kw.keyword}`}
                >
                  {kw.statut.toLowerCase()}
                </button>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{kw.keyword}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Added {DateTime.fromISO(kw.createdAt).toFormat("MMM dd, yyyy")}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default KeywordsPage;
