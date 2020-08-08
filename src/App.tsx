import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MoviesContext from './context/MoviesContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

//Definimos estilo de nuestra APP principal
const useStyles = makeStyles(() =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

//Ejecutamos nuestra App
function App() {
  //Generamos las propiedades CSS que implementamos en nuestra App
  const classes = useStyles();

  //estado general con las movies
  const [moviesList, setMoviesList] = useState();

  return (
    <div className={classes.main}>
      <MoviesContext.Provider value={{ moviesList, setMoviesList }}>
        <Router>
          <Routes />
        </Router>
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
