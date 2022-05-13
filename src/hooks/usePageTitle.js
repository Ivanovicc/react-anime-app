import { useRef, useEffect } from "react";

export const usePageTitle = (title, previousTitle = false) => {
  const titleDefault = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!previousTitle) {
        document.title = titleDefault.current;
      }
    },
    []
  );
};
