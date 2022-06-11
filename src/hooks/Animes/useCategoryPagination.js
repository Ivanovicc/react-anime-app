import { useEffect, useState } from "react";
import {
  categoryPopularPreview,
  categoryEmisionPreviews,
} from "api/Animes/getCategories";

export const useRecentCategoryPagination = ({ id }) => {
  const [loadingPage, setLoadingPage] = useState(false);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [result, setResult] = useState([]);

  useEffect(() => {
    setLoadingPage(true);
    categoryEmisionPreviews({ id, page }).then((result) => {
      const { meta } = result;
      const newCount = meta.count;
      const totalCount = Math.ceil(newCount / 20);
      setResult(result);
      setPageCount(totalCount);
      setLoadingPage(false);
    });
  }, [id, page]);

  return { result, setPage, pageCount, page, loadingPage };
};

export const usePopularCategoryPagination = ({ id }) => {
  const [loadingPage, setLoadingPage] = useState(false);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [result, setResult] = useState([]);

  useEffect(() => {
    setLoadingPage(true);
    categoryPopularPreview({ id, page }).then((result) => {
      const { meta } = result;
      const newCount = meta.count;
      const totalCount = Math.ceil(newCount / 20);
      setResult(result);
      setPageCount(totalCount);
      setLoadingPage(false);
    });
  }, [id, page]);

  return { result, setPage, pageCount, page, loadingPage };
};
