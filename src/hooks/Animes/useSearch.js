import { useEffect, useState } from "react";
import { getResults } from "api/Animes/getSearchResults";

export const useSearchForm = ({ key }) => {
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [result, setResult] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    getResults({ key }).then((res) => {
      setResult(res);
      setLoading(false);
    });
  }, [key]);

  useEffect(() => {
    setLoadingPage(true);
    getResults({ key, pageOffset }).then((result) => {
      const { meta } = result;
      const newCount = meta.count;
      const totalCount = Math.ceil(newCount / 20);
      setResult(result);
      setPageCount(totalCount);
      setLoadingPage(false);
    });
  }, [key, pageOffset]);

  return { result, loading, setPageOffset, pageCount, pageOffset, loadingPage };
};
