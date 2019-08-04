import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  photoGallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  galleryHeading: {
    marginBottom: 30,
  }
}));


const PhotoGallery = (props) => {
  const classes = useStyles();
  const { photos } = props;
  
  return (
    <div className={classes.photoGallery}>
      <Typography className={classes.galleryHeading} gutterBottom variant="h4" component="h3" align="center">Photo Gallery</Typography>
      <GridList cellHeight={320} className={classes.gridList} cols={2.5}>
        {photos.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.file.url} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default PhotoGallery;