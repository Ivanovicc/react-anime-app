import { Link } from "wouter";
/* Styles */
import "./categoryList.css";

export const CategoryList = ({ title, list }) => {
  return (
    <div className="category-wrapper">
      <div className="category-container">
        <h5 className="wrap-title">{title}</h5>
        <div className="category-list">
          <ul>
            {list?.map(({ slug, id }) => {
              return (
                <li key={id}>
                  <Link to={`/category/${slug}`}>{slug}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
