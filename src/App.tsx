import { useEffect, useMemo, useState } from "react";
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
import ProvidersFilterModal from "./components/ProvidersFilterModal";
import CategoryGrid from "./components/CategoryGrid";
import About from "./components/About";
import Footer from "./components/Footer";

const GAMES_PER_PAGE = 45;
const FAVORITES_CATEGORY_ID = "favorites";

export default function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("15665");

  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const [currentPage, setCurrentPage] = useState(1);
  const [loadingGames, setLoadingGames] = useState(false);
  const [errorGames, setErrorGames] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [totalGames, setTotalGames] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [filterOpen, setFilterOpen] = useState(false);

  /* ---------- FAVORITES PERSISTENCE ---------- */

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(new Set(JSON.parse(saved)));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify([...favorites]));
  }, [favorites]);

  function toggleFavorite(gameId: string) {
    setFavorites((prev) => {
      const next = new Set(prev);

      if (next.has(gameId)) {
        next.delete(gameId);
      } else {
        next.add(gameId);
      }

      return next;
    });
  }

  /* ---------- FETCH STATIC DATA ---------- */

  useEffect(() => {
    fetchProviders().then(setProviders).catch(console.error);

    fetchCategories()
      .then((cats) => {
        setCategories(cats);
        const inicio = cats.find((c) => c.id === "15665");
        if (inicio) setSelectedCategory(inicio.id);
      })
      .catch(console.error);
  }, []);

  /* ---------- CATEGORIES (WITH FAVORITES) ---------- */

  const categoriesWithFavorites: Category[] = useMemo(() => {
    return [
      {
        id: FAVORITES_CATEGORY_ID,
        category: "Favorites",
        icon_active: "", // placeholder string, unused
        icon_light: "", // placeholder string, unused
        providers: {},
        count: favorites.size,
      },
      ...categories,
    ];
  }, [categories, favorites]);

  /* ---------- HANDLERS ---------- */

  function handleSelectProvider(provider: string | null) {
    setSelectedProvider(provider);
    setSelectedCategory("15665");
  }

  function handleSelectCategory(categoryId: string) {
    setSelectedCategory(categoryId);
    setSelectedProvider(null);
  }

  /* ---------- FETCH GAMES ---------- */

  useEffect(() => {
    if (selectedCategory === FAVORITES_CATEGORY_ID) {
      // Do not clear games — keep already loaded games
      setHasMore(false); // no pagination
      setErrorGames(null); // clear any previous error
      return; // skip fetching
    }

    // Reset state for other categories
    setGames([]);
    setCurrentPage(1);
    setHasMore(true);
    setTotalGames(null);
    setErrorGames(null);
    setSearchTerm("");

    fetchGamesForCategory(1, selectedProvider || "", selectedCategory);
  }, [selectedProvider, selectedCategory]);

  async function fetchGamesForCategory(
    page: number,
    provider: string,
    categoryId: string,
  ) {
    if (loadingGames) return;

    setLoadingGames(true);

    try {
      const { games: newGames, total } = await fetchGames(
        provider,
        page,
        categoryId,
      );

      if (total && totalGames === null) setTotalGames(total);

      setGames((prev) =>
        page === 1 ? newGames.slice(0, GAMES_PER_PAGE) : [...prev, ...newGames],
      );

      if (newGames.length < GAMES_PER_PAGE) {
        setHasMore(false);
      } else {
        setCurrentPage(page + 1);
      }
    } catch {
      setErrorGames("Failed to load games.");
    } finally {
      setLoadingGames(false);
    }
  }

  /* ---------- DISPLAYED GAMES ---------- */

  const displayedGames = useMemo(() => {
    let baseGames =
      selectedCategory === FAVORITES_CATEGORY_ID
        ? games.filter((g) => favorites.has(g.id))
        : games;

    if (searchTerm) {
      baseGames = baseGames.filter((g) =>
        g.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return [...baseGames].sort((a, b) => {
      const aFav = favorites.has(a.id);
      const bFav = favorites.has(b.id);
      return aFav === bFav ? 0 : aFav ? -1 : 1;
    });
  }, [games, favorites, searchTerm, selectedCategory]);

  const totalCount =
    selectedCategory === FAVORITES_CATEGORY_ID
      ? favorites.size
      : (totalGames ?? 8918);

  const loadedCount = displayedGames.length;
  const progress = Math.min(Math.round((loadedCount / totalCount) * 100), 100);

  /* ---------- UI ---------- */

  return (
    <div className="bg-white">
      <Navbar />

      <div className="px-[90px] pt-[16px]">
        <HeroCarousel />
      </div>

      <div className="px-[90px] pt-6">
        <ProvidersGrid
          providers={providers}
          selectedProvider={
            selectedCategory === FAVORITES_CATEGORY_ID ? null : selectedProvider
          }
          onSelectProvider={handleSelectProvider}
        />

        <CategoryGrid
          categories={categoriesWithFavorites}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onSearch={setSearchTerm}
          onOpenFilter={() => setFilterOpen(true)}
          favoritesCategoryId={FAVORITES_CATEGORY_ID} // <-- pass it here
        />

        <ProvidersFilterModal
          open={filterOpen}
          providers={providers}
          selectedProvider={selectedProvider}
          onApply={(provider) => {
            handleSelectProvider(provider);
            setFilterOpen(false);
          }}
          onClose={() => setFilterOpen(false)}
        />
      </div>

      <div className="min-h-screen px-[150px] py-[10px]">
        <GameGrid
          games={displayedGames}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          isFavoritesView={selectedCategory === FAVORITES_CATEGORY_ID}
        />

        {/* Error message */}
        {errorGames && (
          <div className="p-6 text-center text-red-500 font-medium">
            {errorGames}
          </div>
        )}

        {!loadingGames && hasMore && (
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="text-sm text-zinc-600">
              {loadedCount} / {totalCount} ({progress}%)
            </div>

            <div className="w-[320px] h-2 bg-zinc-200 rounded-full">
              <div
                className="h-full bg-yellow-400"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              className="mt-2 px-5 py-2 bg-[#00A6FF] text-white rounded"
              onClick={() =>
                fetchGamesForCategory(
                  currentPage,
                  selectedProvider || "",
                  selectedCategory,
                )
              }
            >
              Load More
            </button>
          </div>
        )}

        {loadingGames && (
          <div className="p-10 text-zinc-400">Loading games…</div>
        )}
      </div>

      <About />
      <Footer />
    </div>
  );
}
