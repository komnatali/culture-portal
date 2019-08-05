import React from "react";
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
function YandexMap({isEnMode, mapCode}) {
  const StyleWrapperMap = {
    display: "block",
    margin: "0 auto",
    maxWidth: "800px",
    width: "100%",
    height: "550px",
  }
  
  let title = isEnMode ? 'Location' : 'Локация';
  return (
    <div><Typography gutterBottom variant="h4" component="h3" align="center">{title}</Typography>
    <div style={StyleWrapperMap} dangerouslySetInnerHTML={{__html: mapCode}}></div>
    </div>
  )
}

export default connect(state => ({
  isEnMode:  state.app.isEnMode
}), null)(YandexMap);