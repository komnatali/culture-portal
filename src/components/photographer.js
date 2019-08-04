import React from "react";
import BiographyTimeline from "./biographyTimeline";
import Layout from "./layout";
import { graphql } from 'gatsby';
import VideoInformation from "./videoInformation";
import PhotographerInfo from "./PhotographerInfo";
import YandexMap from "./yandex-map"

const Photographer = ({ data }) => {
  const authorInfo = data.contentfulAuthors;
  const years = authorInfo.yearsOfLife;
  const { biography } = authorInfo.biography;
  const { biographyList } = authorInfo;
  const videolink  = data.contentfulAuthors.videolink;
  const { mapCode }  = authorInfo.mapCode

  return (
    <Layout>
      <PhotographerInfo photo={authorInfo.photo} initials={authorInfo.initials} bio={biography} years={years} />      
      <BiographyTimeline biographyList={biographyList} />
      <VideoInformation videolink={videolink}/>
      <YandexMap mapCode={mapCode}/>  
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
      yearsOfLife
      mapCode {
        mapCode
      }
      photo {
        title
        resolutions(width: 1600){
          width
          height
          src
          srcSet
        }
      }
    }
  }
`