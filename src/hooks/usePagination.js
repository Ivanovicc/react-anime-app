import { useEffect, useState } from "react";
import { getAnimes } from "api/Animes/getAnimes";
import { useAnimes } from "./useAnimes";

export const usePagination = () => {
  const { state, loading } = useAnimes();
  const [results, setResults] = useState(state);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getAnimes({ page }).then((result) => {
      const { meta } = result;
      const newCount = meta.count;
      const totalCount = Math.ceil(newCount / 18);
      setResults(result);
      setPageCount(totalCount);
    });
  }, [page]);

  return { results, pageCount, setPage, loading };
};
