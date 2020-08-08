import React, { useEffect, useContext } from 'react';

import { getMovies } from '../../api/getMovies';
import MoviesContext from '../../context/MoviesContext';
import CardMovie from './components/CardMovie';
import { Grid } from '@material-ui/core';

//Ejecutamos nuestra App
const MoviesList = () => {
  //consumer
  const movies = useContext(MoviesContext);

  //llamamos a la API al montar el componente
  useEffect(() => {
    const apiMovies = async () => {
      const result = await getMovies();
      movies.setMoviesList(result);
    };
    apiMovies();
  }, []);

  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      {movies.moviesList ? (
        movies.moviesList.map((movie: any, index: number) => (
          <CardMovie key={index} data={movie} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Grid>
  );
};

export default MoviesList;
