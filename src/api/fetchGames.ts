import type { Game } from "../types/Game";


const ENDPOINT =
  "https://sfgdefe0923.fun88adrods.online/mexicopwa/data/games_v2.php?category=15665&provider=&account=&page=1&display_platform=0";

export async function fetchGames(): Promise<Game[]> {
  const res = await fetch(ENDPOINT);
  const data = await res.json();
  return data;
}
