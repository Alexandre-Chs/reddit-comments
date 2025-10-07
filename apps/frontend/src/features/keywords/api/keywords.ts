export async function keywordsTeam() {
  const response = await fetch("api/teams/keywords", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return response.json();
}

export async function keywordTeamAdd(keyword: string) {
  const response = await fetch("api/teams/keywords", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ keyword }),
  });

  return response.json();
}

export async function keywordTeamToggleStatus(keywordId: string) {
  const response = await fetch("api/teams/keywords/status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ keywordId }),
  });

  return response.json();
}
