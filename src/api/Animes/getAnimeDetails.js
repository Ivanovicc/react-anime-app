import { API_URL } from "api/settings";

const apiResponseAnimeDetail = (apiResponse) => {
  const { data = [], included = [] } = apiResponse;
  const anime = data[0].attributes;
  const categories = included.map(({ attributes, id }) => {
    return attributes.slug;
  });

  return { anime, categories };
};

export const getAnimeDetails = ({ content, slug }) => {
  return fetch(
    `${API_URL}/${content}?fields[categories]=slug%2Ctitle&filter[slug]=${slug}&include=categories`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimeDetail);
};
