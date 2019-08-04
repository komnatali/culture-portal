import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import { Grid, Container, Card, Button, Avatar, Paper, Typography, Badge, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import shortid from 'shortid'

import RenderRichText from '../../utils/RenderRichText'
import RenderImage from '../../utils/RenderImage';

const useStyles = makeStyles((theme) => ({
  bigAvatar: {
    width: 200,
    height: 200,
    border: `2px solid ${theme.palette.primary.main}`
  },
  smallBadge: {
    width: 45,
    height: 45,
    marginTop: 50,
    marginRight: 25,
    transition: 'all .1s ease-in',
    '&:hover': {
      transform: 'scale(1.2)',
      transition: 'all .1s ease-in'
    }
  },
  containerWidePic: {
    width: '100%',
    height: 'auto',
  },
  fullWide: {
    width: '100vw',
    boxSizing: 'border-box'
  },
}));

const DevTeamBlock = ({ data }) => {
  const classes = useStyles();

  const DevTeamBlockData = data
  const GithubIcon = RenderImage(classes.containerWidePic, DevTeamBlockData.githubIcon.resolutions)

  /*Function processing data for each team participant*/
  function devTeamParts() {
    let arr = [];
    for (let i = 0; i < DevTeamBlockData.names.length; i++) {
      arr.push(
        <Grid item key={shortid.generate()} component='li' zeroMinWidth style={{ width: '280px', minWidth: '22%', maxWidth: '90%', marginTop: '4%', listStyleType: 'none' }} >
          <a title={DevTeamBlockData.githubLinks[i]} href={DevTeamBlockData.githubLinks[i]} target='_blank' rel="noopener noreferrer">
            <Badge badgeContent={<div className={classes.smallBadge}>{GithubIcon}</div>}>
              <Avatar className={classes.bigAvatar} src={DevTeamBlockData.photos[i].resolutions.src} alt={DevTeamBlockData.photos[i].title} />
            </Badge>
          </a>
          <Container maxWidth={false} style={{ textAlign: 'center', padding: '3% 0 0' }}>
            <Typography variant='h5' component='h3' color='primary'>{DevTeamBlockData.names[i]}</Typography>
            <Typography variant='body1' >{DevTeamBlockData.partDesc[i]}</Typography>
          </Container>
        </Grid>)
    }
    return <>{arr}</>;
  }

  /**/

  return (
    <>
      <Container maxWidth='lg' style={{ padding: '2% 10%' }}>
        {RenderRichText(DevTeamBlockData.desc.json)}
      </Container>
      <Container maxWidth={false} className={classes.fullWide} style={{ background: 'linear-gradient(to right, #ECF5FF 50%, #ECF5FF00 50%)' }}>
        <Container maxWidth='lg' style={{ padding: '3% 5%', backgroundColor: '#ECF5FF' }}>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            wrap="wrap"
            spacing={5}

            component='ul'
          >
            {devTeamParts()}
          </Grid>
        </Container>
      </Container>
    </>
  )
}

export default DevTeamBlock;