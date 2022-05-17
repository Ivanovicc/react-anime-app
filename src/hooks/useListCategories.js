import { useState, useEffect } from "react";
import {
  getCategories,
  getParentId,
  getCategoriesRelated,
} from "api/getCategories";

export const useListCategories = () => {
  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setListCategories);
  }, []);

  return { listCategories };
};

export const useParentCategory = ({ id }) => {
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [parentId, setParentId] = useState({});
  const [categoryRelated, setCategoryRelated] = useState([]);

  useEffect(() => {
    getParentId({ id }).then((parentId) => {
      setParentId(parentId);
    });
  }, [id]);

  useEffect(() => {
    /*   setLoadingCategories(true); */
    getCategoriesRelated({ parentId }).then((res) => {
      setCategoryRelated(res);
      /*     setLoadingCategories(false); */
    });
  }, [parentId]);

  return { categoryRelated, loadingCategories };
};
