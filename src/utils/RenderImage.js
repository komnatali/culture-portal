import React from 'react'
import { CardMedia } from '@material-ui/core'

export default function RenderImage(classes, img_contentful) {
  const { width, height, src, srcSet } = img_contentful;
  return <img className={classes} width={width} height={height} src={src} srcSet={srcSet} />;

}