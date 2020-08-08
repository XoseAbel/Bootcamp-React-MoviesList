import { APIKEY, BASEURLDETAILS } from '../const/const';

const getMovieDetails = async (id: string | null) => {
  let UrlToFetch = `${BASEURLDETAILS}${id}?api_key=${APIKEY}`;

  try {
    const result = await fetch(UrlToFetch);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getMovieDetails };
