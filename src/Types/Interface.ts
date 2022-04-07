import { Interface } from "readline";

export interface IGlobalHeader {
  title: string;
  cryptodata?: string;
}

export type TCryptoMain = {
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  low_24h: number;
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

export type IEn = {
  description: string;
};

export interface ICryptoExtraDetails {
  categories: string[];
  description: {
    en: string;
  };
  id: string;
  image: {
    large: string;
    small: string;
    thumb: string;
  };

  links: {
    blockchain_site: string[];
    homepage: string[];
    official_forum_url: string[];
    repos_url: {
      github: string[];
    };
    subreddit_url: string;
  };
  market_cap_rank: number;
  market_data: {
    circulating_supply: number;
    current_price: {
      usd: number;
    };
    fully_diluted_valuation: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    market_cap_change_percentage_24h: number;
    max_supply: number;
    price_change_percentage_24h: number;
    total_supply: number;
    total_volume: {
      usd: number;
    };
  };
  name: string;
  symbol: string;
}
