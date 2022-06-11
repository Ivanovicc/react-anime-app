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

const apiResponseCategoriesAnimes = (apiResponse) => {
  const { data = [], meta = {} } = apiResponse;
  if (Array.isArray(data)) {
    const animes = data.map((anime) => {
      const { attributes, id, type } = anime;
      const poster = attributes.posterImage?.medium;
      const slug = attributes.slug;
      const title = attributes.canonicalTitle;
      const subType = attributes.subtype;
      return { title, slug, id, poster, type, subType };
    });
    return { animes, meta };
  }
  return [];
};

const apiResponseParentId = (apiResponse) => {
  const { data = [], included = [] } = apiResponse;
  const parent = included[0].id;
  const { attributes } = data[0];
  const info = attributes.description;
  return { parent, info };
};

/* CATEGORY PAGE */

export const categoryPopularPreview = ({ id, limit = 20, page = 0 } = {}) => {
  return fetch(
    `${API_URL}/anime?filter[categories]=${id}&page[limit]=${limit}&page[offset]=${
      limit * page
    }&sort=-user_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseCategoriesAnimes);
};

export const categoryEmisionPreviews = ({ id, limit = 20, page = 0 } = {}) => {
  return fetch(
    `${API_URL}/anime?filter[categories]=${id}&filter[status]=current%2Cfinished&page[limit]=${limit}&page[offset]=${
      limit * page
    }&sort=-start_date`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseCategoriesAnimes);
};

/* CATEGORIES LIST */

export const getCategories = () => {
  return fetch(
    `${API_URL}/categories?page[limit]=30&page[offset]=0&sort=-total_media_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseCategories);
};

export const getParentId = ({ id = "" }) => {
  return fetch(
    `${API_URL}/categories?filter[slug]=${id}&include=parent.parent&page[limit]=10&page[offset]=0`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseParentId);
};

export const getCategoriesRelated = ({ parent }) => {
  return fetch(
    `${API_URL}/categories?filter[parent_id]=${parent}&page[limit]=30&page[offset]=0`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseCategories);
};
