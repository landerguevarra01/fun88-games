export interface Category {
  id: string;
  category: string;
  icon_active: string;
  icon_light: string;
  icon_off?: string;
  providers: Record<string, number>;
  count: number;
  favoritesCategoryId?: string;
}
