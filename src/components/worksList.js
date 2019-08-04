import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RenderRichText from '../utils/RenderRichText';

const useStyles = makeStyles(() => ({
  worksList: {
    marginTop: 40,
    marginRight: 'auto',
    marginBottom: 50,
    marginLeft: 'auto',
    width: '50%',
  },
}));

const WorksList = (props) => {
  const classes = useStyles();
  const { works } = props;

  return (
    <div className={classes.worksList}>
      <Typography className={classes.worksHeading} gutterBottom variant="h4" component="h3" align="center">Works</Typography>
      {RenderRichText(works.json)}
    </div>
  );
}

export default WorksList;