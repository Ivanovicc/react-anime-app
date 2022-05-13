import { useEffect, useState } from "react";
import { emisionPreview, popularPreview, ratingPreview } from "api/getPreviews";

export const usePreviews = () => {
  const [inEmision, setInEmision] = useState([]);
  const [popular, setPopular] = useState([]);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    emisionPreview().then(setInEmision);
  }, []);

  useEffect(() => {
    popularPreview().then(setPopular);
  }, []);

  useEffect(() => {
    ratingPreview().then(setRating);
  }, []);

  return { inEmision, popular, rating };
};
