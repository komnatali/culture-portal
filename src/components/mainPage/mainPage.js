import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import React from "react"
import { Grid, Container, Card, Button, Avatar, Paper, Typography, Badge, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import shortid from 'shortid'


import RenderRichText from '../../utils/RenderRichText'
import RenderImage from '../../utils/RenderImage'
import MainBlock from './mainBlock'
import AuthorOTDBlock from './authorOTDBlock'
import MainpageStyles from "./MainpageStyles";
import DevTeamBlock from './devTeamBlock'


const MainPage = ({ data }) => {
  let classes = MainpageStyles()

  const MainpageData = data.english.nodes[0]
  const MainBlockdata = {
    title: MainpageData.title,
    desc: MainpageData.desc,
    picture: MainpageData.mainPicture
  }
  const AuthorOTDdata = {
    desc: MainpageData.authorOfTheDayDesc,
    authorOfTheDay: MainpageData.authorOfTheDay,
    locale: MainpageData.node_locale
  }
  const DevTeamBlockData = {
    desc: MainpageData.developerTeamDesc,
    photos: MainpageData.teamPhotos,
    names: MainpageData.devPartNames,
    partDesc: MainpageData.devPartDesc,
    githubLinks: MainpageData.githubLinks,
    githubIcon: MainpageData.githubIcon
  }

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{MainpageData.title}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Helmet>
      <MainBlock data={MainBlockdata}></MainBlock>
      <AuthorOTDBlock data={AuthorOTDdata}></AuthorOTDBlock>
      <DevTeamBlock data={DevTeamBlockData}></DevTeamBlock>
    </div>
  )
}

export default MainPage