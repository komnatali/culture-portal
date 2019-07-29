import { Link } from "gatsby";
import React from "react";
import BiographyTimeline from './biographyTimeline';

const Photographer = ({data}) => {
  const authorInfo = data.contentfulAuthors;
  const { biography } = authorInfo.biography;
  const { biographyList } = authorInfo;

  return (
    <div className="author-page">
      <BiographyTimeline biographyList={biographyList} />
    </div>
  );
};

export default Photographer;

export const PhotographerQuery = graphql`
query($slug: String!) {
  contentfulAuthors(slug: {eq: $slug}) {
    biography {
      biography
    }
    biographyList
    initials
    videolink
  }
}`;
