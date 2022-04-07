import { createContext } from "react";

import { TCryptoMain } from "../Types/Interface";

//create a context for array of data and use TCryptomain as a type
export const CryptoContext = createContext<{
  crypto: TCryptoMain[];
  setCryptoData: (crypto: TCryptoMain[]) => void;
}>({
  crypto: [],
  setCryptoData: () => {},
});
