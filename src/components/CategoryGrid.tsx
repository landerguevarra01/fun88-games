import { useState } from "react";
import type { Category } from "../types/Category";

interface Props {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
  onSearch: (searchTerm: string) => void; // callback for search
}

export default function CategoryGrid({
  categories,
  selectedCategory,
  onSelectCategory,
  onSearch,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // always call parent with current search term
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Categories */}
      <div className="relative w-full">
        <div className="flex gap-4 overflow-x-auto py-4 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center gap-2 px-3 py-2 rounded-lg transition
                  ${isActive ? "bg-yellow-400 text-black" : "bg-transparent hover:bg-zinc-100"}`}
              >
                <img
                  src={isActive ? cat.icon_active : cat.icon_light}
                  alt={cat.category}
                  className="w-10 h-10 object-contain"
                />
                <span
                  className={`text-xs font-semibold uppercase ${
                    isActive ? "text-black" : "text-zinc-700"
                  }`}
                >
                  {cat.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search */}
      <div className="w-full flex justify-end">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search games..."
          className="px-3 py-2 border border-zinc-300 rounded-lg w-[250px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    </div>
  );
}
