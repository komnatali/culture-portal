import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import { Typography, Container, Grid, Paper } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import PhCard from '../components/phCard';

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

const photographersList = ({ data }) => {
  const edges = data.english.edges;
//   const edges = data.russian.edges;
  const classes = useStyles();

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
          Photographers of Belarus
        </Typography>
        <Container className={classes.authorsList}>
          {authorsList}
        </Container>
      </Container>
    </Layout>
  );
}

export default photographersList;

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
