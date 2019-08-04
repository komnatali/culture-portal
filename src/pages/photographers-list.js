import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql } from 'gatsby';
import { Typography, Container } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import PhCard from '../components/phCard';
import SearchIcon from '@material-ui/icons/Search';

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
  search: {
    marginBottom: 30,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('md')]: {
      backgroundColor: fade(theme.palette.common.white, 0.15),
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 120,
      '&:focus': {
        width: 200,
      }
    }
  }
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
  });

  let [filteredList, setFilteredList] = useState(authorsList);


  const handleSearch = function (event) {
    const searchQuery = event.target.value.toLowerCase();

    const fList = authorsList.filter((function (el) {
      const searchValue = el.props.phr.initials.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    }));

    setFilteredList(fList);
  }

  return (
    <Layout>
      <Container>
        <Typography className={classes.mainTitle} variant='h4' gutterBottom>
          Photographers of Belarus
        </Typography>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearch}
          />
        </div>

        <Container className={classes.authorsList}>
          {filteredList}
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
