/* Styles */
import "./loadingPage.css";
import image from "icon.gif";

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="img-content">
        <img src={image} alt="cerezo-png-view" />
        <div className="load-title">
          <h2>Cargando...</h2>
        </div>
      </div>
    </div>
  );
};
