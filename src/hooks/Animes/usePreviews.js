import { useEffect, useState } from "react";
import {
  emisionPreview,
  popularPreview,
  ratingPreview,
} from "api/Animes/getPreviews";

export const usePreviews = () => {
  const [loading, setLoading] = useState(false);
  const [inEmision, setInEmision] = useState([]);
  const [popular, setPopular] = useState([]);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    setLoading(true);
    emisionPreview().then((res) => {
      setInEmision(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    popularPreview().then((res) => {
      setPopular(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    ratingPreview().then((res) => {
      setRating(res);
      setLoading(false);
    });
  }, []);

  return { inEmision, popular, rating, loading };
};
