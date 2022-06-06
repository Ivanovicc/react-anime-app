import { useEffect, useState } from "react";
import {
  categoryPopularPreview,
  getParentId,
  categoryEmisionPreviews,
} from "api/Animes/getCategories";

export const useCategory = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [categoryPopular, setCategoryPopular] = useState([]);
  const [categoryEmision, setCategoryEmision] = useState([]);
  const [parentId, setParentId] = useState({});

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

  useEffect(() => {
    setLoading(true);
    getParentId({ id }).then((res) => {
      setParentId(res);
      setLoading(false);
    });
  }, [id]);

  return { categoryPopular, categoryEmision, loading, parentId };
};
