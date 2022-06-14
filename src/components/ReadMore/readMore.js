import { useState } from "react";
import { truncateOnWord } from "utils/truncateWord";

export const ReadMore = ({ text, limit }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="description">
      {isReadMore && text?.length > limit
        ? truncateOnWord({ text, limit })
        : text}
      <span
        onClick={toggleReadMore}
        className={text?.length > limit ? "inline-block" : "disabled"}
      >
        {isReadMore ? "Mostrar más" : " Mostrar menos"}
      </span>
    </p>
  );
};
