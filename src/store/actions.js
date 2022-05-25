import {
  GET_POPULAR_ANIMES,
  GET_TOP_RATED_ANIMES,
  GET_POPULAR_IN_EMISION_ANIMES,
} from "./actionsTypes";

export const getPopular = (popularAnime) => ({
  type: GET_POPULAR_ANIMES,
  payload: popularAnime,
});

export const getTopRated = (topRatedAnime) => ({
  type: GET_TOP_RATED_ANIMES,
  payload: topRatedAnime,
});

export const getPopularEmision = (inEmisionAnime) => ({
  type: GET_POPULAR_IN_EMISION_ANIMES,
  payload: inEmisionAnime,
});
