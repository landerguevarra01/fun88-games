// ./api/fetchCategory.ts
import type { Category } from "../types/Category";

interface ApiCategoryItem {
  id: string;
  category: string;
  icon_active: string;
  icon_light: string;
  icon_off?: string;
  providers: Record<string, number>;
  count: number;
  article?: string;
}

// API returns an array of categories
type ApiResponse = ApiCategoryItem[];

const ENDPOINT =
  "https://sfgdefe0923.fun88adrods.online/mexicopwa/games/categories.php?account=&display_platform=0";

/**
 * Fetch all game categories from API and return as `Category[]`
 */
export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(ENDPOINT);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: ApiResponse = await res.json();

  // Map API fields to our Category type
  return data.map((item) => ({
    id: item.id, // use API-provided id
    category: item.category,
    icon_active: item.icon_active,
    icon_light: item.icon_light,
    icon_off: item.icon_off,
    providers: item.providers,
    count: item.count,
  }));
}
