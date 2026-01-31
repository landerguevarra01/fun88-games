export interface Provider {
  name: string;
  count: number;
  iconLight: string;
  iconDark?: string;
}

export interface ProviderApiItem {
  iconLight: string;
  iconDark: string;
  count: number;
  article: unknown;
}

export interface ProvidersResponse {
  providers: Record<string, ProviderApiItem>;
}
