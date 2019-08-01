import React from 'react';
import { navigate } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minHeight: 400,
  },
});

export default function PhCard(props) {
  const classes = useStyles();

  function handelCardClick(e) {
    e.preventDefault();
    navigate(`/${props.slug}/`);
  }

  return (
    <Card className={classes.card} onClick={handelCardClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.phr.photo.title}
          height="300"
          image={props.phr.photo.resolutions.src}
          title={props.phr.photo.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
            {props.phr.initials}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.phr.biography.internal.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}
