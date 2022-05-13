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

export const popularPreview = () => {
  const apiURL =
    "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-user_count";

  return fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const ratingPreview = () => {
  const apiURL =
    "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-average_rating";

  return fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const emisionPreview = () => {
  const apiURL =
    "https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=6&page[offset]=0&sort=-user_count";

  return fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const categoryPopularPreview = ({ id }) => {
  const apiURL = `https://kitsu.io/api/edge/anime?filter[categories]=${id}&page[limit]=12&page[offset]=0&sort=-user_count`;

  return fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const categoryEmisionPreviews = ({ id }) => {
  const apiURL = `https://kitsu.io/api/edge/anime?filter[categories]=${id}&page[limit]=12&page[offset]=0&sort=-start_date`;

  return fetch(apiURL)
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};
