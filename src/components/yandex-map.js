import React from "react";

function YandexMap(props) {
  const StyleWrapperMap = {
    display: "block",
    margin: "100px auto",
    maxWidth: "800px",
    width: "100%",
    height: "550px",
  }
  
  return (
    <div style={StyleWrapperMap} dangerouslySetInnerHTML={{__html: props.mapCode}}>     
    </div>
  )
}

export default YandexMap;