import { Link, graphql } from "gatsby"
import React from "react"

import RenderRichText from '../RenderRichText'
import RenderImage from '../RenderImage'

const MainPage = ({ data }) => {
  const MainPage = data.english.nodes[0]
  console.log(MainPage.developerTeamDesc)
  return (<React.Fragment>
    <h1>{MainPage.title}</h1>
    <div>
      {RenderImage(MainPage.mainPicture.resolutions)}
      {RenderRichText(MainPage.desc.json)}</div>
    <div>{RenderRichText(MainPage.developerTeamDesc.json)}</div>
    <ul>{MainPage.githubLinks.map(link => <li><a href={link}>{link}</a></li>)}</ul>
    <Link to="/photographers-list/">Go to photographers list page</Link>
  </React.Fragment>)
}

export default MainPage