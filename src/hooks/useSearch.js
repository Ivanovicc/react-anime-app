import { useEffect, useState } from "react";
import { getResults } from "api/getSearchResults";

export const useSearchForm = ({ key }) => {
  const [loading, setLoading] = useState(false);
  /*   const [loadingPage, setLoadingPage] = useState(false); */
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
    /*    if (pageOffset === 0) return; */
    getResults({ key, pageOffset }).then((result) => {
      const { meta } = result;
      const newCount = meta.count;
      const totalCount = Math.ceil(newCount / 15);
      setResult(result);
      setPageCount(totalCount);
    });
  }, [key, pageOffset]);

  return { result, loading, setPageOffset, pageCount, pageOffset };
};
