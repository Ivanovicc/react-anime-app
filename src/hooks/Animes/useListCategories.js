import { useState, useEffect } from "react";
import {
  getCategories,
  getParentId,
  getCategoriesRelated,
} from "api/Animes/getCategories";

export const useListCategories = () => {
  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setListCategories);
  }, []);

  return { listCategories };
};

export const useParentCategory = ({ id }) => {
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [parentId, setParentId] = useState(228);
  const [categoryRelated, setCategoryRelated] = useState([]);

  useEffect(() => {
    setLoadingCategories(true);
    getParentId({ id }).then((res) => {
      setParentId(res);
      setLoadingCategories(false);
    });
  }, [id]);

  useEffect(() => {
    setLoadingCategories(true);
    getCategoriesRelated({ parentId }).then((res) => {
      setCategoryRelated(res);
      setLoadingCategories(false);
    });
  }, [parentId]);

  return { categoryRelated, loadingCategories };
};
