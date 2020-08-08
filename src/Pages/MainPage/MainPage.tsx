import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

const MainPage = () => {
  const classes = useStyles();

  let history = useHistory();
  function handleRoute(query: string) {
    history.push(`/movies?query=${query}`);
  }

  return (
    <div className={classes.root}>
      <Button
        variant='contained'
        color='primary'
        onClick={() => handleRoute('comedy')}
      >
        Comedy
      </Button>

      <Button
        variant='contained'
        color='primary'
        onClick={() => handleRoute('terror')}
      >
        Terror
      </Button>

      <Button
        variant='contained'
        color='primary'
        onClick={() => handleRoute('action')}
      >
        Action
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={() => handleRoute('musical')}
      >
        Musical
      </Button>
    </div>
  );
};
export { MainPage };
