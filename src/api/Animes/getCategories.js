import { API_URL } from "api/settings";

const apiResponseCategories = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const categories = data.map((category) => {
      const { attributes, id } = category;
      const slug = attributes.slug;
      return { slug, id };
    });
    return categories;
  }
  return [];
};

const apiResponseParentId = (apiResponse) => {
  const { included = [] } = apiResponse;
  if (Array.isArray(included)) {
    const parents = included[0].id;

    return parents;
  }
  return [];
};

export const getParentId = ({ id }) => {
  return fetch(
    `${API_URL}/categories?filter[slug]=${id}&include=parent.parent&page[limit]=10&page[offset]=0`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseParentId);
};

export const getCategoriesRelated = ({ parentId = "" } = {}) => {
  return fetch(
    `${API_URL}/categories?filter[parent_id]=${parentId}&page[limit]=50&page[offset]=0`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseCategories);
};

export const getCategories = () => {
  return fetch(
    `${API_URL}/categories?page[limit]=40&page[offset]=0&sort=-total_media_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseCategories);
};
