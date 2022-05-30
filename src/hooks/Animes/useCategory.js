import { useEffect, useState } from "react";
import {
  categoryPopularPreview,
  categoryEmisionPreviews,
} from "api/Animes/getCategories";

export const useCategory = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [categoryPopular, setCategoryPopular] = useState([]);
  const [categoryEmision, setCategoryEmision] = useState([]);

  useEffect(() => {
    setLoading(true);
    categoryPopularPreview({ id }).then((res) => {
      setCategoryPopular(res);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    categoryEmisionPreviews({ id }).then((res) => {
      setCategoryEmision(res);
      setLoading(false);
    });
  }, [id]);

  return { categoryPopular, categoryEmision, loading };
};
