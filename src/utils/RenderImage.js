import React from 'react'

export default function RenderImage(img_contentful) {
  const { width, height, src, srcSet } = img_contentful;
  return <img width={width} height={height} src={src} srcSet={srcSet} />;

}