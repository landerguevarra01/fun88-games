// ./api/fetchGames.ts
import type { Game } from "../types/Game";

type FetchGamesResponse =
  | Game[]
  | {
      games: Game[];
      total: number;
    };

/**
 * Fetch games from API.
 * @param provider Provider name filter
 * @param page Page number
 * @param categoryId Category ID (default is INICIO 15665)
 */
export async function fetchGames(
  provider: string = "",
  page: number = 1,
  categoryId: string = "15665",
): Promise<{ games: Game[]; total?: number }> {
  const url = `https://sfgdefe0923.fun88adrods.online/mexicopwa/data/games_v2.php?category=${categoryId}&provider=${encodeURIComponent(
    provider,
  )}&account=&page=${page}&display_platform=0`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch games");

  const data: FetchGamesResponse = await res.json();

  // Handle both API shapes
  if (Array.isArray(data)) return { games: data };
  return { games: data.games, total: data.total };
}
