import { useState } from "react";

export const ReadMore = ({ text, limit, index }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="description">
      {isReadMore && text?.length > limit
        ? text?.slice(0, index) + "..."
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
