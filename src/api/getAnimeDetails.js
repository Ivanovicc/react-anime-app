export const getAnimeDetails = ({ slug }) => {
  const baseURL = `https://kitsu.io/api/edge/anime?fields[categories]=slug%2Ctitle&filter[slug]=${slug}&include=categories`;

  return fetch(baseURL)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      const { data, included } = result;
      const anime = data[0].attributes;
      const categories = included.map(({ attributes, id }) => {
        return attributes.slug;
      });

      return { anime, categories };
    });
};
