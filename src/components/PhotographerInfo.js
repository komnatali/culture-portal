import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  photographerInfo: {
    marginTop: 40,
    marginRight: 'auto',
    marginBottom: 50,
    marginLeft: 'auto',
    width: '70%',
  },
  photographerPic: {
    width: 200,
    height: 200,
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 30,
    marginLeft: 'auto',
  },
}));

const PhotographerInfo = (props) => {
  const classes = useStyles();
  const { initials, photo, bio, years } = props;

  return (
    <div className={classes.photographerInfo}>
      <div>
        <Avatar src={photo.resolutions.src} className={classes.photographerPic}/>
        <Typography gutterBottom variant="h6" component="h2" align="center">
          {initials}
        </Typography>
        <Typography align="center" color="textSecondary" gutterBottom>
          {years}
        </Typography>
      </div>

      <Typography paragraph className={classes.photographerDescription} align="center" gutterBottom variant="body2">
        {bio}
      </Typography>
    </div>
  );
}

export default PhotographerInfo;