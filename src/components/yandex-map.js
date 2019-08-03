import React from "react";

function YandexMap(props) {
  const StyleWrapperMap = {
    display: "block",
    margin: "30px auto",
    maxWidth: "800px",
    height: "550px",
  }
  return (
    <div style={StyleWrapperMap} dangerouslySetInnerHTML={{__html: props.mapCode}}>
    </div>
  )
}

export default YandexMap;