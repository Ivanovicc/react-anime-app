import {
  GET_POPULAR_ANIMES,
  GET_TOP_RATED_ANIMES,
  GET_POPULAR_IN_EMISION_ANIMES,
} from "./actionsTypes";

export function reduceAnime(state, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POPULAR_ANIMES:
      return { ...state, popularAnime: payload };
    case GET_TOP_RATED_ANIMES:
      return { ...state, topRatedAnime: payload };
    case GET_POPULAR_IN_EMISION_ANIMES:
      return { ...state, inEmisionAnime: payload };
    default:
      return state;
  }
}
