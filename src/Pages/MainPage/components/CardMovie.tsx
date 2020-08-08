import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 280,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

export default function CardMovie({ data }: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
