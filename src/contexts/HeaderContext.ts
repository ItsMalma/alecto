import { createContext } from "react";

type HeaderContextType = {
  width: number;
  height: number;
};

export const HeaderContext = createContext<HeaderContextType>({
  width: 0,
  height: 0,
});
