import { useEffect, useState, useMemo } from "react";
import { fetchGames } from "./api/fetchGames";
import { fetchProviders } from "./api/fetchProviders";
import { fetchCategories } from "./api/fetchCategory";

import type { Game } from "./types/Game";
import type { Provider } from "./types/Providers";
import type { Category } from "./types/Category";

import GameGrid from "./components/GameGrid";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ProvidersGrid from "./components/ProvidersGrid";
import CategoryGrid from "./components/CategoryGrid";
import About from "./components/About";
import Footer from "./components/Footer";

const GAMES_PER_PAGE = 45;

export default function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("15665"); // INICIO by default
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingGames, setLoadingGames] = useState(false);
  const [errorGames, setErrorGames] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [totalGames, setTotalGames] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(""); // search term

  // Fetch providers & categories once
  useEffect(() => {
    fetchProviders().then(setProviders).catch(console.error);

    fetchCategories()
      .then((cats) => {
        setCategories(cats);
        // Auto-select INICIO if exists
        const inicio = cats.find((c) => c.id === "15665");
        if (inicio) setSelectedCategory(inicio.id);
      })
      .catch(console.error);
  }, []);

  // Load games whenever provider OR category changes
  useEffect(() => {
    if (!selectedCategory) return;

    // Reset state
    setGames([]);
    setCurrentPage(1);
    setHasMore(true);
    setTotalGames(null);
    setErrorGames(null);
    setSearchTerm(""); // clear search when category/provider changes

    // Fetch first page immediately
    fetchGamesForCategory(1, selectedProvider || "", selectedCategory);
  }, [selectedProvider, selectedCategory]);

  // Function to fetch games for a category (first page or "Load More")
  async function fetchGamesForCategory(
    page: number,
    provider: string,
    categoryId: string,
  ) {
    if (loadingGames) return;

    setLoadingGames(true);
    setErrorGames(null);

    try {
      const { games: newGames, total } = await fetchGames(
        provider,
        page,
        categoryId,
      );

      if (total && totalGames === null) setTotalGames(total);

      if (page === 1) {
        setGames(newGames.slice(0, GAMES_PER_PAGE));
      } else {
        setGames((prev) => [...prev, ...newGames]);
      }

      if (newGames.length < GAMES_PER_PAGE) {
        setHasMore(false);
      } else {
        setCurrentPage(page + 1);
        setHasMore(true);
      }
    } catch (err) {
      console.error(err);
      setErrorGames("Failed to load games.");
    } finally {
      setLoadingGames(false);
    }
  }

  // Compute games displayed based on search
  const displayedGames = useMemo(() => {
    if (!searchTerm) return games;
    return games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [games, searchTerm]);

  const loadedCount = displayedGames.length;
  const totalCount = totalGames ?? 8918;
  const progress = Math.min(Math.round((loadedCount / totalCount) * 100), 100);

  return (
    <div className="bg-white">
      <Navbar />

      <div className="px-[90px] pt-[16px]">
        <HeroCarousel />
      </div>

      <div className="px-[90px] pt-6">
        <ProvidersGrid
          providers={providers}
          selectedProvider={selectedProvider}
          onSelectProvider={setSelectedProvider}
        />

        <CategoryGrid
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSearch={setSearchTerm} // updated search
        />
      </div>

      <div className="min-h-screen px-[150px] py-[10px]">
        <GameGrid games={displayedGames} />

        {errorGames && <div className="p-10 text-red-500">{errorGames}</div>}

        {!loadingGames && hasMore && (
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="text-sm text-zinc-600">
              {loadedCount} / {totalCount} ({progress}%)
            </div>

            <div className="w-[320px] h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              className="mt-2 px-5 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
              onClick={() =>
                fetchGamesForCategory(
                  currentPage,
                  selectedProvider || "",
                  selectedCategory,
                )
              }
              disabled={loadingGames}
            >
              Load More
            </button>
          </div>
        )}

        {loadingGames && (
          <div className="p-10 text-zinc-400">Loading games…</div>
        )}
        {!hasMore && !loadingGames && (
          <div className="text-center text-zinc-400 mt-6">All games loaded</div>
        )}
      </div>

      <About />
      <Footer />
    </div>
  );
}
