import React from "react"
import { Link } from "gatsby"
import PrimarySearchAppBar from '../components/appBar';

const photographersList = ({ data }) => {
  const englishEdges = data.english.edges

  const authorsList = englishEdges.map((edge, index) => {
    const { slug } = edge.node

    return (
      <li key={index.toString()}>
        <Link to={slug}> Link to {edge.node.initials}</Link>
      </li>
    )
  })

  return (
    <React.Fragment>
      
      <PrimarySearchAppBar />
      
      <h1>Страница со списком фотографов</h1>
      <ul className="authors-list">{authorsList}</ul>
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
