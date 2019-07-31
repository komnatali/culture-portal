import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import { Grid, Container, Card, Button, Avatar, Paper, Typography, Badge } from "@material-ui/core"
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles"
    

import RenderRichText from '../../utils/RenderRichText'
import RenderImage from '../../utils/RenderImage'

const useStyles = makeStyles(theme => ({
root: {
  flexGrow: 1,
  },
bigAvatar: {
  width: '90%',
  height: 'auto'
},
containerWidePic: {
  width: '100%',
  height: 'auto',
  float: 'left'
},
smallBadge: {
  width: '20%',
  marginLeft: '-52%',
  marginTop: '10%'
}

})) 

  const MainPage = ({ data }) => {

  let classes = useStyles()
 
  const MainPage = data.russian.nodes[0]
  console.log(MainPage.githubIcon)
  const GithubIcon = RenderImage(classes.containerWidePic, MainPage.githubIcon.resolutions)

  /*Function processing data for each team participant*/
  function devTeamParts() {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push(
        <Grid item zeroMinWidth xl maxWidth='md' style={{ marginTop: '10%' }} >
        <Badge badgeContent={<Link className={classes.smallBadge} title={MainPage.githubLinks[i]} to={MainPage.githubLinks[i]}>{GithubIcon}</Link>}>
          <Avatar className={classes.bigAvatar} title={MainPage.teamPhotos[i].title} src={MainPage.teamPhotos[i].resolutions.src} alt={MainPage.teamPhotos[i].title} />
          </Badge>
            <Container>
          <Typography variant='h5'>{MainPage.devPartNames[i]}</Typography>
            <Typography variant = 'body1' >{MainPage.devPartDesc[i]}</Typography>
          </Container>  
    </Grid>)    
    }
    return <>{arr}</>;
  }
  
    return (
      <div className={classes.root}>
    <Helmet>
    <title>{MainPage.title}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Helmet>
    <Paper>
      <Grid container
direction="column"
  justify="center"
          alignItems="flex-start"
          style={{ width: '100%', height: '65vh', background: `center / cover url(${MainPage.mainPicture.resolutions.src})` }}>
      <Container>
      <Typography variant='h1' color='primary'>{MainPage.title}</Typography>
        <Container style={{ marginTop: '30px' }}>
              {RenderRichText(MainPage.desc.json)}
            </Container>
          </Container>
        </Grid>
    </Paper>
      <Paper>
  <Grid container
direction="column"
      justify="center"
          alignItems="flex-start"
          style={{ width: '100%', height: '65vh' }}>
     <Container maxWidth='md'>
        
        {RenderRichText(MainPage.authorOfTheDayDesc.json)}
        
          <Link to="/photographers-list/">
              <Card>
              </Card>
        </Link>
      </Container>
          <Button href='/ph o togr aphers-list/' className='right-aligned-wide-btn'>Увидеть всех</Button>
    </Grid>      
    </Paper>
      <Container maxWidth='md'>
        {RenderRichText(MainPage.developerTeamDesc.json)}

      </Container>
        <Container maxWidth='md'>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          wrap="wrap"
        >
          {devTeamParts()}
      </Grid>
</Container>
  </div>
      )
}

export default MainPage