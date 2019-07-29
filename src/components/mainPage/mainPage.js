import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import { Grid, Container, Card } from "@material-ui/core";

import RenderRichText from '../RenderRichText'
import RenderImage from '../RenderImage'

const MainPage = ({ data }) => {
  const MainPage = data.english.nodes[0]
  return (<React.Fragment>
    <Helmet>
      <title>{MainPage.title}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Helmet>
    <Grid container
      direction="column"
      justify="center"
      alignItems="flex-start"
      style={{ width: '100%', height: '65vh', background: `center / cover url(${MainPage.mainPicture.resolutions.src})` }}>
      <Container maxWidth='md'>
        <h1>{MainPage.title}</h1>
        <div style={{ width: '90%', marginLeft: '10%' }}>{RenderRichText(MainPage.desc.json)}</div>
      </Container>
    </Grid>
    <Grid container
      direction="column"
      justify="center"
      alignItems="flex-start"
      style={{ width: '100%', height: '65vh', background: `linear-gradient(to bottom, rgba(236,245,255,1) 45%, rgba(236,245,255,0) 45%)` }}>
      <Container maxWidth='md'>
        {RenderRichText(MainPage.authorOfTheDayDesc.json)}
        <Link to="/photographers-list/">
          <Card style={{ height: '250px' }}>
          </Card>
        </Link>
      </Container>
    </Grid>
    {/* <div>{RenderRichText(MainPage.developerTeamDesc.json)}</div>
    <ul>{MainPage.githubLinks.map(link => <li><a href={link}>{link}</a></li>)}</ul> */}
    <Link to="/photographers-list/">Go to photographers list page</Link>
  </React.Fragment>)
}

export default MainPage