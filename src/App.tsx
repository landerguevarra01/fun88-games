import { useEffect, useState } from "react";
import { fetchGames } from "./api/fetchGames";
import type { Game } from "./types/Game";

import GameGrid from "./components/GameGrid";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";

export default function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGames().then((data) => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="p-10 text-zinc-400">Loading games…</div>;
  }

  return (
    <>
      <div className="bg-white ">
        <Navbar />
        <div className="px-[150px]">
          <HeroCarousel />
        </div>
        <div className="min-h-screen px-[150px] py-[10px]">
          <GameGrid games={games} />
        </div>
      </div>
    </>
  );
}
