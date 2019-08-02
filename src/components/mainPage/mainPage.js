import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import { Grid, Container, Card, Button, Avatar, Paper, Typography, Badge, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import shortid from 'shortid'


import RenderRichText from '../../utils/RenderRichText'
import RenderImage from '../../utils/RenderImage'
import AuthorOTDCard from './authorOTDCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    overflowX: 'hidden',
    '& p': {
      fontSize: '1.1rem'
    },
    [theme.breakpoints.down('md')]: {
      '& h1': {
        fontSize: '2.5rem',
        textAlign: 'center'
      },
      '& h2': {
        fontSize: '1.5rem',
      }
    }
  },
  bigAvatar: {
    width: '100%',
    height: '100%',
    border: `2px solid ${theme.palette.primary.main}`
  },
  containerWidePic: {
    width: '100%',
    height: 'auto',
    float: 'left'
  },
  smallBadge: {
    width: '30%',
    marginLeft: '-12%',
    marginTop: '40%',
    transition: 'all .1s ease-in',
    '&:hover': {
      transform: 'scale(1.2)',
      transition: 'all .1s ease-in'
    }
  },
  fullWide: {
    width: '100vw',
    boxSizing: 'border-box'
  },
  rightAlignedWideBtn: {
    width: '56%',
    background: theme.palette.primary.light,
    position: 'relative',
    left: '44%',
    justifyContent: 'flex-start',
    paddingLeft: '20px',
    color: '#ffffff',
    '&:hover': {
      background: theme.palette.primary.main,
      color: '#ffffff',
    }
  }


}))

const MainPage = ({ data }) => {

  let classes = useStyles()

  const MainpageData = data.english.nodes[0]
  console.log(MainpageData)
  const GithubIcon = RenderImage(classes.containerWidePic, MainpageData.githubIcon.resolutions)

  /*Function processing data for each team participant*/
  function devTeamParts() {
    let arr = [];
    for (let i = 0; i < MainpageData.devPartNames.length; i++) {
      arr.push(
        <Grid item key={shortid.generate()} component='li' zeroMinWidth style={{ width: '280px', minWidth: '22%', maxWidth: '90%', marginTop: '4%', listStyleType: 'none' }} >
          <a title={MainpageData.githubLinks[i]} href={MainpageData.githubLinks[i]} target='_blank' rel="noopener noreferrer">
            <Badge badgeContent={<div className={classes.smallBadge}>{GithubIcon}</div>}>
              <Avatar className={classes.bigAvatar} title={MainpageData.teamPhotos[i].title} src={MainpageData.teamPhotos[i].resolutions.src} alt={MainpageData.teamPhotos[i].title} />
            </Badge>
          </a>
          <Container maxWidth={false} style={{ textAlign: 'center', padding: '3% 0 0' }}>
            <Typography variant='h5' component='h3' color='primary'>{MainpageData.devPartNames[i]}</Typography>
            <Typography variant='body1' >{MainpageData.devPartDesc[i]}</Typography>
          </Container>
        </Grid>)
    }
    return <>{arr}</>;
  }

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{MainpageData.title}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Helmet>
      <Paper>
        <Container maxWidth={false} style={{ padding: '11% 0', background: `center / cover url(${MainpageData.mainPicture.resolutions.src})` }}>
          <Container maxWidth='lg'>
            <Typography variant='h1' color='primary'> <Box fontWeight="fontWeightMedium" component='strong'>{MainpageData.title}</Box></Typography>
            <Container style={{ marginTop: '30px', marginLeft: '-2%', maxWidth: '98vw' }}>
              {RenderRichText(MainpageData.desc.json)}
            </Container>
          </Container>
        </Container>
      </Paper>
      <Container maxWidth={false} style={{ position: 'relative', zIndex: '-1', paddingTop: '5%', paddingBottom: '7%', background: '#ECF5FF' }}>
        <Container maxWidth='lg' style={{ paddingLeft: '10%' }}>
          {RenderRichText(MainpageData.authorOfTheDayDesc.json)}
        </Container>
      </Container>
      <Container maxWidth='lg' style={{ marginTop: '-5%' }}>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center">
          <AuthorOTDCard
            key={MainpageData.authorOfTheDay.initials}
            data={MainpageData.authorOfTheDay}
            slug={MainpageData.authorOfTheDay.slug}>
          </AuthorOTDCard>
        </Grid>
      </Container>
      <Button href='/photographers-list/' className={classes.rightAlignedWideBtn} style={{ margin: '2% 0' }}>{(function () { switch (MainpageData.node_locale) { case ('ru'): return 'Показать всех'; case ('en-US'): return 'See all'; default: throw Error('Indefined locale') } }())}</Button>
      <Container maxWidth='lg' style={{ padding: '2% 10%' }}>
        {RenderRichText(MainpageData.developerTeamDesc.json)}
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

    </div>
  )
}

export default MainPage