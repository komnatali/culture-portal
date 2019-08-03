import React from "react";

function YandexMap(props) {
  const StyleWrapperMap = {
    display: "block",
    margin: "100px auto",
    maxWidth: "800px",
    height: "550px",
  }
  console.log('props', props.mapCode)
  return (
    <div style={StyleWrapperMap} dangerouslySetInnerHTML={{__html: props.mapCode}}>     
    </div>
  )
}

export default YandexMap;