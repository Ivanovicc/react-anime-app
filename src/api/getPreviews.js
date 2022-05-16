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

export const popularPreview = () => {
  return fetch(`${API_URL}/anime?page[limit]=5&page[offset]=0&sort=-user_count`)
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const ratingPreview = () => {
  return fetch(
    `${API_URL}/anime?page[limit]=5&page[offset]=0&sort=-average_rating`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const emisionPreview = () => {
  return fetch(
    `${API_URL}/anime?filter[status]=current&page[limit]=5&page[offset]=0&sort=-user_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const categoryPopularPreview = ({ id }) => {
  return fetch(
    `${API_URL}/anime?filter[categories]=${id}&page[limit]=10&page[offset]=0&sort=-user_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};

export const categoryEmisionPreviews = ({ id }) => {
  return fetch(
    `${API_URL}/anime?filter[categories]=${id}&page[limit]=10&page[offset]=0&sort=-start_date`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseAnimes);
};
