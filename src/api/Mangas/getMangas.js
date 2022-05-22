import { API_URL } from "api/settings";

const apiResponseMangas = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const mangas = data.map((manga) => {
      const { attributes, id, type } = manga;
      const poster = attributes.posterImage?.small;
      const slug = attributes.slug;
      const title = attributes.canonicalTitle;
      return { title, slug, id, poster, type };
    });
    return mangas;
  }
  return [];
};

export const getMangasInEmision = () => {
  return fetch(
    `${API_URL}/manga?filter%5Bstatus%5D=current&page%5Blimit%5D=5&page%5Boffset%5D=0&sort=-user_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseMangas);
};

export const getMangasBestRating = () => {
  return fetch(
    `${API_URL}/manga?page%5Blimit%5D=5&page%5Boffset%5D=0&sort=-average_rating`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseMangas);
};

export const getMangasMostPopular = () => {
  return fetch(
    `${API_URL}/manga?page%5Blimit%5D=5&page%5Boffset%5D=0&sort=-user_count`
  )
    .then((res) => {
      return res.json();
    })
    .then(apiResponseMangas);
};
