import { useEffect, useState } from "react";
import { getAnimeDetails } from "api/getAnimeDetails";

export const useDetail = ({ slug }) => {
  const [loading, setLoading] = useState(false);
  const [animeDetails, setAnimeDetails] = useState({});
  const [animeCategories, setAnimeCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAnimeDetails({ slug }).then((res) => {
      setAnimeDetails(res.anime);
      setAnimeCategories(res.categories);
      setLoading(false);
    });
  }, [slug]);

  return { animeDetails, animeCategories, loading };
};
