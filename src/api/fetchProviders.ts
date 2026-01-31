// lib/fetchProviders.ts
import type {
  Provider,
  ProviderApiItem,
} from "../types/Providers";

const ENDPOINT =
  "https://sfgdefe0923.fun88adrods.online/mexicopwa/games/lists.php?account=&display_platform=0";

// Type for category object in API
interface Category {
  name: string;
  providers: Record<string, number>;
  count: number;
  article: unknown;
}

interface ApiResponse {
  categories: Record<string, Category>;
  providers: Record<string, ProviderApiItem>;
}

/**
 * Fetch providers with count coming from the HOME category.
 */
export async function fetchProviders(): Promise<Provider[]> {
  const res = await fetch(ENDPOINT);

  if (!res.ok) {
    throw new Error("Failed to fetch providers");
  }

  const data: ApiResponse = await res.json();

  // Find HOME category
  const homeCategory = Object.values(data.categories).find(
    (cat) => cat.name === "HOME"
  );

  const homeCounts: Record<string, number> = homeCategory?.providers ?? {};

  return Object.entries(data.providers)
    .map(([name, provider]) => ({
      name,
      iconLight: provider.iconLight,
      iconDark: provider.iconDark ?? "",
      count: homeCounts[name] ?? 0,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
