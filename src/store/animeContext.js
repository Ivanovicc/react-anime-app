import { useReducer, createContext } from "react";
import { initialState } from "./initialState";
import { reduceAnime } from "./reducerAnime";

export const AnimeContext = createContext({});

export const AnimeContextProvider = ({ children }) => {
  const store = useReducer(reduceAnime, initialState);

  return (
    <AnimeContext.Provider value={store}>{children}</AnimeContext.Provider>
  );
};
