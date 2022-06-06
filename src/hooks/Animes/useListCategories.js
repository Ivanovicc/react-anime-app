import { useState, useEffect } from "react";
import { getCategories, getCategoriesRelated } from "api/Animes/getCategories";

export const useListCategories = () => {
  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setListCategories);
  }, []);

  return { listCategories };
};

export const useParentCategory = ({ parentId }) => {
  const { parent } = parentId;
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [categoryRelated, setCategoryRelated] = useState([]);

  useEffect(() => {
    setLoadingCategories(true);
    getCategoriesRelated({ parent }).then((res) => {
      setCategoryRelated(res);
      setLoadingCategories(false);
    });
  }, [parent]);

  return { categoryRelated, loadingCategories };
};
