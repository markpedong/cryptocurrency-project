export interface IGlobalHeader {
  title: string;
  cryptodata?: string;
}

export type TCryptoMain = {
  circulating_supply: number;
  current_price: number;
  id: string;
  image: string;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_percentage_24h: number;
  symbol: string;
  total_supply: number;
  total_volume: number;
};
