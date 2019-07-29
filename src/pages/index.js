import React from "react"

import MainPage from "../components/mainPage/"

const IndexPage = ({ data }) => <MainPage data={data}></MainPage>

export default IndexPage

export const Query = graphql`
query{
  english: allContentfulMainPage(filter: { node_locale: { eq: "en-US" } }) {
    nodes{
      title
      mainPicture {
        resolutions(width: 1600){
        width
        height
        src
        srcSet
        }
      }
      desc {
        json
      }
      developerTeamDesc {
        json
      }
      githubLinks

      node_locale
    }
  }

  russian: allContentfulMainPage(filter: { node_locale: { eq: "ru" } }) {
    nodes{
      title
      mainPicture {
        resolutions(width: 1600){
        width
        height
        src
        srcSet
        }
      }
      desc {
        json
      }
      developerTeamDesc {
        json
      }
      githubLinks

      node_locale
    }
  }
}
`