import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '../Pages/NotFound/NotFound';
import MoviesList from '../Pages/MainPage/Movies';

const Routes = () => {
  return (
    <Switch>
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
