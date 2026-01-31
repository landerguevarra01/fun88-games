import type { Game } from "../types/Game";

interface Props {
  games: Game[];
}

export default function GameGrid({ games }: Props) {
  if (games.length === 0)
    return <div className="p-10 text-zinc-400">No games available.</div>;

  return (
    <div className="px-4 py-2">
      {/* Game Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="group bg-zinc-900 rounded-xl overflow-hidden shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={game.imgURL}
                alt={game.name}
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="px-5 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-full">
                  PLAY
                </button>
              </div>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold text-white truncate">
                {game.name}
              </h3>

              <div className="flex items-center gap-2 mt-2 text-xs text-zinc-400">
                <img src={game.platformIconLight} className="w-4 h-4" alt="" />
                {game.platform}
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                {game.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-[2px] text-[10px] rounded-full bg-white/10 text-white/80 uppercase"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
