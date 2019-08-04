import React from "react";
import BiographyTimeline from "./biographyTimeline";
import Layout from "./layout";
import { graphql } from 'gatsby';
import VideoInformation from "./videoInformation";
import PhotographerInfo from "./PhotographerInfo";
import PhotoGallery from "./photoGallery";
import YandexMap from "./yandex-map";
import WorksList from "./worksList";
import { connect } from 'react-redux';

const Photographer = ({isEnMode, dispatch, data }) => {

  let dataLng;
  
  if(isEnMode) {
    dataLng = data.english;
  } else {
    dataLng = data.russian;
  }
  
  const authorInfo = dataLng;
  const years = authorInfo.yearsOfLife;
  const works = authorInfo.works;
  const workExamples = authorInfo.workExamples || [];
  const { biography } = authorInfo.biography;
  const { biographyList } = authorInfo;
  const videolink  = authorInfo.videolink;
  const { mapCode }  = authorInfo.mapCode


  return (
    <Layout>
      <PhotographerInfo photo={authorInfo.photo} initials={authorInfo.initials} bio={biography} years={years} />      
      <BiographyTimeline biographyList={biographyList} />
      <PhotoGallery photos={workExamples}/>
      <WorksList works={works}/>
      <VideoInformation videolink={videolink}/>
      <YandexMap mapCode={mapCode}/>  
    </Layout>
  );
}


export default connect(state => ({
  isEnMode: state.app.isEnMode
}), null)(Photographer);

export const PhotographerQuery = graphql`
query($slug: String!) {
  english: contentfulAuthors(slug: { eq: $slug }, node_locale: { eq: "en-US" } ) {
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
    workExamples {
      id
      title
      file {
        url
      }
    }
    works {
      json
    }
  }

  russian: contentfulAuthors(slug: { eq: $slug }, node_locale: { eq: "ru" } ) {
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
    workExamples {
      id
      title
      file {
        url
      }
    }
    works {
      json
    }
  }
}
`
