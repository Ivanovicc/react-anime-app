import { useEffect, useState } from "react";
import { getAnimeDetails } from "api/getAnimeDetails";

export const useDetail = ({ slug }) => {
  const [animeDetails, setAnimeDetails] = useState({});
  const [animeCategories, setAnimeCategories] = useState([]);

  useEffect(() => {
    getAnimeDetails({ slug }).then((res) => {
      setAnimeDetails(res.anime);
      setAnimeCategories(res.categories);
    });
  }, [slug]);

  return { animeDetails, animeCategories };
};
