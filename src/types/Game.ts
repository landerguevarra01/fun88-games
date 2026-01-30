export interface GameInfo {
  id: string;
  gameCode: string;
  gameCodeAlias: string;
  gameId: string;
  jackpot_amount: number;
}

export interface Game {
  id: string;
  name: string;
  imgURL: string;
  platform: string;
  category: string[];
  categoryId: string[];
  platformIconLight: string;
  platformIconDark: string;
  sequence: number;
  gameInfo: GameInfo;
}
