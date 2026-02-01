import { useEffect, useRef, useState } from "react";
import type { Category } from "../types/Category";

interface Props {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
  onSearch: (searchTerm: string) => void;
  onOpenFilter: () => void;
}

export default function CategoryGrid({
  categories,
  selectedCategory,
  onSelectCategory,
  onSearch,
  onOpenFilter,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollState();
  }, [categories]);

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Categories + arrows */}
      <div className="relative flex-1 min-w-0 flex items-center">
        {/* Left Gradient + Arrow */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
            {/* Gradient */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent" />

            {/* Arrow */}
            <button
              onClick={() => scrollByAmount(-200)}
              className="relative ml-1 px-2 py-1 text-sm rounded bg-white/80 backdrop-blur hover:bg-white cursor-pointer"
            >
              ◀
            </button>
          </div>
        )}

        {/* Category List */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-4 overflow-hidden py-4 px-8"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center gap-2 px-3 py-2 rounded-lg transition shrink-0
                  ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "bg-transparent hover:bg-zinc-100"
                  }`}
              >
                <img
                  src={isActive ? cat.icon_active : cat.icon_light}
                  alt={cat.category}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xs font-semibold uppercase">
                  {cat.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Gradient + Arrow */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center">
            {/* Gradient */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent" />

            {/* Arrow */}
            <button
              onClick={() => scrollByAmount(200)}
              className="relative mr-1 px-2 py-1 text-sm rounded bg-white/80 backdrop-blur hover:bg-white cursor-pointer"
            >
              ▶
            </button>
          </div>
        )}
      </div>

      {/* Search + Filter */}
      <div className="shrink-0 flex items-center gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search games..."
          className="w-[220px] px-3 py-2 border border-zinc-300 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="button"
          onClick={() => onOpenFilter()}
          className="px-3 py-2 rounded-lg border border-zinc-300 bg-white
               hover:bg-zinc-100 flex items-center gap-1"
        >
          🔍
          <span className="text-sm font-medium">Filter</span>
        </button>
      </div>
    </div>
  );
}
