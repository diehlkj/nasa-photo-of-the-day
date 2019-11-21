import React from "react";
import "../App.css";

const PhotoInfo = props => {
  return (
    <div className="photo-info">
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      
      <div className="more-info">
        <p>{props.explanation}</p>
      </div>
    </div>
  );
}

export default PhotoInfo;
