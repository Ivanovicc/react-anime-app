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

export const getResults = ({ key, limit = 16, page = 0 } = {}) => {
  let apiURL = `https://kitsu.io/api/edge/anime?filter[text]=${key}&page[limit]=${limit}&page[offset]=${
    limit * page
  }`;

  return fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};
