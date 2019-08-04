import { Helmet } from "react-helmet";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainBlock from './mainBlock';
import AuthorOTDBlock from './authorOTDBlock';
import DevTeamBlock from './devTeamBlock';

const useStyles = makeStyles((theme) => ({
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
}));

const MainPage = ({ data }) => {
  let classes = useStyles()

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