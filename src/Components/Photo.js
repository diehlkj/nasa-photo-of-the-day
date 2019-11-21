import React from "react";
import "../App.css";

const Photo = props => {
  return (
    <div className="photo">
      <img className="photo-background" src={props.hdurl} />
      <img className="photo-foreground" src={props.hdurl} />
    </div>
  );
}

export default Photo;
