import { Link } from "wouter";
/* Styles */
import "./categoryList.css";

export const CategoryList = ({ title, list }) => {
  return (
    <div className="category-wrapper">
      <h3 className="wrap-title">{title}</h3>
      <div className="category-list">
        <ul>
          {list?.map(({ slug, id }) => {
            return (
              <li key={id}>
                <Link to={`/anime/category/${slug}`}>
                  <a>{slug}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
