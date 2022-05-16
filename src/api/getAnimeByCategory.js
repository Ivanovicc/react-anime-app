import { API_URL } from "api/settings";

const apiResponseAnimes = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const animes = data.map((anime) => {
      const { attributes, id } = anime;
      const poster = attributes.posterImage?.small;
      const slug = attributes.slug;
      const title = attributes.canonicalTitle;
      const type = attributes.subtype;
      return { title, slug, id, poster, type };
    });
    return animes;
  }
  return [];
};

export const getAnimeByCategory = ({ id }) => {
  return fetch(
    `${API_URL}/anime?filter[categories]=${id}&page[limit]=15&page[offset]=0&sort=-user_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};
