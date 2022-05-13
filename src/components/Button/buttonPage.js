/* Styles */
import "./button.css";

export const ButtonPage = ({ nextPage }) => {
  const handleNext = () => nextPage((prevPage) => prevPage + 1);

  return (
    <div className="button-wrap">
      <button className="load-button" onClick={handleNext}>
        Ver Más
      </button>
    </div>
  );
};
