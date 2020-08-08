import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '../Pages/NotFound/NotFound';
import MoviesList from '../Pages/MoviesList/Movies';
import { DetailsMovie } from '../Pages/DetailsMovie/DetailsMovie';
import { MainPage } from '../Pages/MainPage/MainPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <MainPage />
      </Route>
      <Route path='/movies/:movieKey'>
        <DetailsMovie />
      </Route>
      <Route path='/movies'>
        <MoviesList />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export { Routes };
