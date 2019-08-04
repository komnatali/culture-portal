import React from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhCard from '../components/phCard';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  mainTitle: {
    textAlign: 'center',
    margin: 15,
    marginTop: 50,
    marginBottom: 50,
    fontWeight: 700
  },
  authorsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}));

const photographersList = ({isDarkMode, dispatch, data}) => {

  const classes = useStyles();

  let edges;
  let title;

  if(isEnMode) {
    edges = data.english.edges;
    title = 'Photographers of Belarus';
  } else {
    edges = data.russian.edges;
    title = 'Фотографы Беларуси';
  }

  const authorsList = edges.map((edge, index) => {
    const { slug } = edge.node;

    return (
      <PhCard
        key={edge.node.initials}
        phr={edge.node}
        slug={slug}
      >
      </PhCard >
    );
  })

  return (
    <Layout>
      <Container>
        <Typography className={classes.mainTitle} variant='h4' gutterBottom>
          {title}
        </Typography>
        <Container className={classes.authorsList}>
          {authorsList}
        </Container>
      </Container>
    </Layout>
  );
}

export default connect(state => ({
  isDarkMode: state.app.isEnMode
}), null)(photographersList);

export const PhotographersQuery = graphql`
  query {
    english: allContentfulAuthors(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          slug
          initials
          photo {
            title
            resolutions(width: 1600){
            width
            height
            src
            srcSet
            }
          }
          biography {
            internal {
              content
            }
          }
          node_locale
        }
      }
    }
    russian: allContentfulAuthors(filter: { node_locale: { eq: "ru" } }) {
      edges {
        node {
          slug
          initials
          photo {
            title
            resolutions(width: 1600){
            width
            height
            src
            srcSet
            }
          }
          biography {
            internal {
              content
            }
          }
          node_locale
        }
      }
    }
  }
`
