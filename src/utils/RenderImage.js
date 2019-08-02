import React from 'react'

export default function RenderImage(classes, img_contentful) {
  const { title, width, height, src, srcSet } = img_contentful;
  return <img className={classes} width={width} height={height} src={src} srcSet={srcSet} title={title} alt={title}/>;

}