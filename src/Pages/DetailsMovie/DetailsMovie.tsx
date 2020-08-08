import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useRouteMatch, Link, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/getMoviesDetails';
import {
  TextareaAutosize,
  Grid,
  Button,
  ListItem,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
    img: {
      width: 300,
    },
    comment: {
      fontStyle: 'italic',
    },
    commentsArea: {
      padding: '15px',
    },
  })
);

const DetailsMovie = () => {
  const classes = useStyles();
  let { movieKey } = useParams();

  //movie info state
  const [movieinfo, setMovieinfo] = useState<any | null>(null);
  const [comments, setComment] = useState<[] | any>([]);
  const [text, setText] = useState<string | any>('');

  useEffect(() => {
    const dataMovie = async () => {
      const result = await getMovieDetails(movieKey);
      console.log(result);
      setMovieinfo(result);
    };
    dataMovie();
  }, []);

  const addComment = (event: any) => {
    event.preventDefault();
    console.log(text);
    setComment([...comments, text]);
    setText('');
  };

  return (
    <Grid container>
      {movieinfo ? (
        <Grid container direction='row' justify='center'>
          <div>
            <img
              className={classes.img}
              src={`https://image.tmdb.org/t/p/w500/${movieinfo.poster_path}`}
              alt={movieinfo.title}
            />
            <h3>{movieinfo.title}</h3>
          </div>
          <Grid
            direction='column'
            justify='center'
            className={classes.commentsArea}
          >
            <h5>Comentarios: </h5>
            {comments &&
              comments.map((comment: string) => (
                <>
                  <ListItem className={classes.comment}>{comment}</ListItem>{' '}
                  <Divider />
                </>
              ))}
            <form className={classes.root} autoComplete='off'>
              <TextareaAutosize
                rowsMax={5}
                rowsMin={5}
                aria-label='maximum height'
                placeholder='Please, put your comments'
                value={text}
                onChange={(event: any) => setText(event?.target.value)}
              />
              <Button
                type='submit'
                variant='outlined'
                color='primary'
                onClick={addComment}
              >
                Add Comment
              </Button>
            </form>
            <Link to='/'>Go Home</Link>
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </Grid>
  );
};
export { DetailsMovie };
