import React from "react";
import BiographyTimeline from "./biographyTimeline";
import Layout from "./layout";
import { graphql } from 'gatsby';
import VideoInformation from "./videoInformation"

const Photographer = ({ data }) => {
  const authorInfo = data.contentfulAuthors;
  const { biography } = authorInfo.biography;
  const { biographyList } = authorInfo;
  const  videolink  = data.contentfulAuthors.videolink 

  return (
    <Layout>
      <BiographyTimeline biographyList={biographyList} />
      <VideoInformation videolink={videolink}/> 
    </Layout>
  );
}

export default Photographer;

export const PhotographerQuery = graphql`
  query($slug: String!) {
    contentfulAuthors(slug: { eq: $slug }) {
      biography {
        biography
      }
      biographyList
      initials
      videolink
    }
  }
`
