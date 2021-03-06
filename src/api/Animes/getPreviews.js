import { API_URL } from "api/settings";

const apiResponseAnimes = (apiResponse) => {
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

export const popularPreview = ({ limit, pageOffset = 0 } = {}) => {
  return fetch(
    `${API_URL}/anime?page[limit]=${limit}&page[offset]=${
      limit * pageOffset
    }&sort=-user_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const ratingPreview = ({ limit, pageOffset = 0 } = {}) => {
  return fetch(
    `${API_URL}/anime?page[limit]=${limit}&page[offset]=${
      limit * pageOffset
    }&sort=-average_rating`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const emisionPreview = ({ limit, pageOffset = 0 } = {}) => {
  return fetch(
    `${API_URL}/anime?filter[status]=current&page[limit]=${limit}&page[offset]=${
      limit * pageOffset
    }&sort=-user_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};
