import { API_URL } from "api/settings";

const apiResponseAnimes = (apiResponse) => {
  const { data = [], meta = {} } = apiResponse;

  if (Array.isArray(data)) {
    const animes = data.map((anime) => {
      const { attributes, id } = anime;
      const poster = attributes.posterImage?.small;
      const slug = attributes.slug;
      const title = attributes.canonicalTitle;
      const type = attributes.subtype;
      return { title, slug, id, poster, type };
    });
    return { animes, meta };
  }
  return [];
};

export const getResults = ({ key, limit = 18, pageOffset = 0 } = {}) => {
  return fetch(
    `${API_URL}/anime?filter[text]=${key}&page[limit]=${limit}&page[offset]=${
      limit * pageOffset
    }`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};
