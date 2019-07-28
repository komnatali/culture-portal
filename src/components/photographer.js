import { Link } from "gatsby";
import React from "react";

const Photographer = ({data}) => {
  const authorInfo = data.contentfulAuthors;
  const { biography } = authorInfo.biography;

  return (
    <div className="author-page">
      {biography}
    </div>
  );
};

export default Photographer;

export const PhotographerQuery = graphql`
query($initials: String!) {
  contentfulAuthors(initials: {eq: $initials}) {
    biography {
      biography
    }
    biographyList
    initials
    videolink
  }
}`;
