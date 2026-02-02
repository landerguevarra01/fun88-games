import type { Game } from "../types/Game";
import { FaStar, FaRegStar } from "react-icons/fa";

interface Props {
  games: Game[];
  favorites: Set<string>;
  onToggleFavorite: (gameId: string) => void;
  isFavoritesView?: boolean;
}

export default function GameGrid({
  games,
  favorites,
  onToggleFavorite,
  isFavoritesView,
}: Props) {
  if (games.length === 0)
    return (
      <div className="p-10 text-zinc-400">
        {isFavoritesView ? "No favorite games yet ⭐" : "No games available."}
      </div>
    );

  return (
    <div className="px-4 py-2">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {games.map((game) => {
          const isFav = favorites.has(game.id);

          return (
            <div
              key={game.id}
              className="group bg-zinc-900 rounded-xl overflow-hidden shadow-lg transition hover:-translate-y-1 hover:shadow-2xl relative"
            >
              {/* ⭐ Favorite button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(game.id);
                }}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/60 hover:bg-black transition cursor-pointer"
              >
                {isFav ? (
                  <FaStar className="text-yellow-400" />
                ) : (
                  <FaRegStar className="text-white" />
                )}
              </button>

              <div className="relative">
                <img
                  src={game.imgURL}
                  alt={game.name}
                  className="w-full aspect-[10/10] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="px-5 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-full cursor-pointer">
                    PLAY
                  </button>
                </div>
              </div>

              {/* <div className="p-3">
                <h3 className="text-sm font-semibold text-white truncate">
                  {game.name}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-xs text-zinc-400">
                  <img
                    src={game.platformIconLight}
                    className="w-4 h-4"
                    alt=""
                  />
                  {game.platform}
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
