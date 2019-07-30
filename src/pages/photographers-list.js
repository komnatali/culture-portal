import React from "react"
import { Link } from "gatsby"
import PrimarySearchAppBar from '../components/appBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const photographersList = ({ data }) => {
  const englishEdges = data.english.edges

  const authorsList = englishEdges.map((edge, index) => {
    const { slug } = edge.node

    return (
      <Grid item xs='12'>
        <Paper className='paper' key={index.toString()}>
        <Link to={slug}>{edge.node.initials}</Link>
        </Paper>
      </Grid>
    )
  })

  return (
    <React.Fragment>
      <PrimarySearchAppBar />
      <h1>Страница со списком фотографов</h1>
      <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            >
      <ul className="authors-list">{authorsList}</ul>
      </Grid>
      <Link to="/">Go back to the homepage</Link>
    </React.Fragment>
  )
}

export default photographersList

export const PhotographersQuery = graphql`
  query {
    english: allContentfulAuthors(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          slug
          initials
          node_locale
        }
      }
    }
  }
`
