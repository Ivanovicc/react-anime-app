import { useContext, useEffect, useState } from "react";
import { getAnimes } from "api/Animes/getAnimes";
import { getPopular, getPopularEmision, getTopRated } from "store/actions";
import { AnimeContext } from "store/animeContext";

export const useAnimes = () => {
  const [state, dispatch] = useContext(AnimeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAnimes({ sort: "-user_count" }).then((res) => {
      dispatch(getPopular(res.animes));
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    getAnimes({ filter: "[status]=current", sort: "-user_count" }).then(
      (res) => {
        dispatch(getPopularEmision(res.animes));
        setLoading(false);
      }
    );
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    getAnimes({ sort: "-average_rating" }).then((res) => {
      dispatch(getTopRated(res.animes));
      setLoading(false);
    });
  }, [dispatch]);

  return { state, loading };
};
