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

export const getAnimes = ({ filter, sort, limit = 18, page = 0 } = {}) => {
  return fetch(
    `${API_URL}/anime?filter${filter}?&page[limit]=${limit}&page[offset]=${
      limit * page
    }&sort=${sort}`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};
