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
    marginBottom: 30,
  },
  cardTitle: {
    textAlign: 'center',
    margin: 10,
    marginBottom: 20,
  },
  cardDesc: {
    // overflow: 'hidden',
    paddingBottom: 20,
  },
  cardMedia: {
    top: 0,
    objectPosition: 'top',
  },
});

export default function PhCard(props) {
  const classes = useStyles();
  const firstSecondNames = props.phr.initials.split(', ');

  function handelCardClick(e) {
    e.preventDefault();
    navigate(`/${props.slug}/`);
  }

  return (
    <Card className={classes.card} onClick={handelCardClick}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt={props.phr.photo.title}
          height="300"
          image={props.phr.photo.resolutions.src}
          title={props.phr.photo.title}
        />
        <CardContent>
          <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
            <span style={{ fontWeight: 'bold' }}>{firstSecondNames[0]}</span><br />
            {firstSecondNames[1]}
          </Typography>
          <Typography className={classes.cardDesc} variant="body1" color="textSecondary" component="p">
            {`${props.phr.biography.internal.content.slice(0, 100)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}
