import { useEffect, useState } from "react";
import {
  emisionPreview,
  popularPreview,
  ratingPreview,
} from "api/Animes/getPreviews";

export const usePopularPreviews = ({ limit }) => {
  const [loading, setLoading] = useState(false);
  const [popular, setPopular] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    popularPreview({ limit }).then((res) => {
      setPopular(res);
      setLoading(false);
    });
  }, [limit]);

  useEffect(() => {
    popularPreview({ limit, pageOffset }).then((result) => {
      const { meta } = result;
      const newCount = meta.count;
      const totalCount = Math.ceil(newCount / limit);
      setPopular(result);
      setPageCount(totalCount);
    });
  }, [limit, pageOffset]);

  return { popular, loading, setPageOffset, pageCount, pageOffset };
};

export const useEmisionPreviews = ({ limit }) => {
  const [loading, setLoading] = useState(false);
  const [inEmision, setInEmision] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    emisionPreview({ limit }).then((res) => {
      setInEmision(res);
      setLoading(false);
    });
  }, [limit]);

  useEffect(() => {
    emisionPreview({ limit, pageOffset }).then((result) => {
      const { meta } = result;
      const newCount = meta.count;
      const totalCount = Math.ceil(newCount / limit);
      setInEmision(result);
      setPageCount(totalCount);
    });
  }, [limit, pageOffset]);

  return { inEmision, loading, setPageOffset, pageCount, pageOffset };
};

export const useRatingPreviews = ({ limit }) => {
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    ratingPreview({ limit }).then((res) => {
      setRating(res);
      setLoading(false);
    });
  }, [limit]);

  useEffect(() => {
    ratingPreview({ limit, pageOffset }).then((result) => {
      const { meta } = result;
      const newCount = meta.count;
      const totalCount = Math.ceil(newCount / limit);
      setRating(result);
      setPageCount(totalCount);
    });
  }, [limit, pageOffset]);

  return { rating, loading, setPageOffset, pageCount, pageOffset };
};
