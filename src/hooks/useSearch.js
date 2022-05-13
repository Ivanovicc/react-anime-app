import { useEffect, useState } from "react";
import { getResults } from "api/getSearchResults";

export const useSearchForm = ({ key }) => {
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [result, setResult] = useState([]);
  const [page, setPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    getResults({ key }).then((res) => {
      setResult(res);
      setLoading(false);
    });
  }, [key]);

  useEffect(() => {
    if (page === 0) return;
    getResults({ key, page }).then((nextPage) => {
      setResult((prevPage) => prevPage.concat(nextPage));
    });
  }, [key, page]);

  return { result, loading, setPages };
};
