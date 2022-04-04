export type TCrypto = {
  className?: any;
  style?: any;
  onClick?: any;
};

export type CryptoDetails = {
  totalcrypto: string;
  markets: string;
  totalmarketcap: string;
  volume24H: string;
  btcdominance: string;
  ethdominance: string;
};

export type TopCrypto = {
  id: string;
  name: string;
  price: string;
  volume24H: string;
  symbol: string;
  thumb: string;
};

export type CryptoMarket = {
  cryptomarketcap: number;
  cryptovolume: number;
  marketcapchange: number;
  bitcoindominance: number;
  defi_dominance: number;
  coin_percentage: number;
  coin: string;
  defi_volume_24h: number;
  bitcoin: number;
};

export type TopCoinsProps = {
  url: string;
  title: string;
};

export type TopCoins = {
  coins: {
    item: {
      id: string;
      name: string;
      price_btc: number;
      symbol: string;
      thumb: string;
    };
  }[];
};
