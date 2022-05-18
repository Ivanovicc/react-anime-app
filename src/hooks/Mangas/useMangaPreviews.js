import { useEffect, useState } from "react";
import {
  getMangasBestRating,
  getMangasInEmision,
  getMangasMostPopular,
} from "api/Mangas/getMangas";

export const useMangaPreviews = () => {
  const [loadingMangas, setLoadingMangas] = useState(false);
  const [mangaBestRating, setMangaBestRating] = useState([]);
  const [mangaInEmision, setMangaInEmision] = useState([]);
  const [mangaMostPopular, setMangaMostPopular] = useState([]);

  useEffect(() => {
    setLoadingMangas(true);
    getMangasBestRating().then((res) => {
      setMangaBestRating(res);
      setLoadingMangas(false);
    });
  }, []);

  useEffect(() => {
    setLoadingMangas(true);
    getMangasInEmision().then((res) => {
      setMangaInEmision(res);
      setLoadingMangas(false);
    });
  }, []);

  useEffect(() => {
    setLoadingMangas(true);
    getMangasMostPopular().then((res) => {
      setMangaMostPopular(res);
      setLoadingMangas(false);
    });
  }, []);

  return { mangaBestRating, mangaInEmision, mangaMostPopular, loadingMangas };
};
