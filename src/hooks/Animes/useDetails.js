import { useEffect, useState } from "react";
import { getAnimeDetails } from "api/Animes/getAnimeDetails";

export const useDetail = ({ content, slug }) => {
  const [loading, setLoading] = useState(false);
  const [animeDetails, setAnimeDetails] = useState({});
  const [animeCategories, setAnimeCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAnimeDetails({ content, slug }).then((res) => {
      setAnimeDetails(res.anime);
      setAnimeCategories(res.categories);
      setLoading(false);
    });
  }, [content, slug]);

  return { animeDetails, animeCategories, loading };
};
