import React from "react";

function YandexMap(props) {

  return (
    <div dangerouslySetInnerHTML={{__html: props.mapCode}}>
    </div>
  )
}

export default YandexMap;