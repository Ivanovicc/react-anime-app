import { useEffect, useState } from "react";
import {
  categoryPopularPreview,
  categoryEmisionPreviews,
} from "api/getPreviews";

export const useCategory = ({ id }) => {
  const [categoryPopular, setCategoryPopular] = useState([]);
  const [categoryEmision, setCategoryEmision] = useState([]);

  useEffect(() => {
    categoryPopularPreview({ id }).then(setCategoryPopular);
  }, [id]);

  useEffect(() => {
    categoryEmisionPreviews({ id }).then(setCategoryEmision);
  }, [id]);

  return { categoryPopular, categoryEmision };
};
