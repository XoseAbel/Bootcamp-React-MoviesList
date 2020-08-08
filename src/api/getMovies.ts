import { APIKEY, BASEURL } from '../const/const';

const getMovies = async (query: string | null) => {
  let UrlToFetch = `${BASEURL}${APIKEY}&query=${query}`;

  try {
    const result = await fetch(UrlToFetch);
    const data = await result.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export { getMovies };
