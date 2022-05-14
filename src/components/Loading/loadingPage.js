/* Styles */
import "./loadingPage.css";

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="img-content">
        <img
          src="https://static.wixstatic.com/media/bc8132_43a88eb7921f4c55bb4e7cc375375f0d~mv2.gif"
          alt="cerezo-png-view"
        />
        <div className="load-title">
          <h2>Cargando...</h2>
        </div>
      </div>
    </div>
  );
};
