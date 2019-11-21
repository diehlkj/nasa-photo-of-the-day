import React, { useEffect, useState } from "react";
import axios from "axios"
import PhotoInfo from "./Components/PhotoInfo"
import Photo from "./Components/Photo"
import "./App.css";

function App() {

  const [apodData, setApodData] = useState({});

  useEffect(() => {
    axios          
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`) //&date=2019-07-13&hd=true
      .then(response => {
        setApodData(response.data);
        console.log(response);
      })
      .catch(error => console.log(`Uh oh... ${error}`));
  }, []);

  return (
    <div className="App">
    <PhotoInfo
      date={apodData.date}
      title={apodData.title}
      explanation={apodData.explanation}
    />
      <Photo hdurl={apodData.hdurl} />
    </div>
  );
}

export default App;
