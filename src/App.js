import React from "react";
import { useState } from "react";
import "./styles.css";

import imagesArr from "./imageData";

export default function App() {
  const [bigImage, setbigImage] = useState(
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
  );

  function HandleClick(image) {
    setbigImage(image);
  }

  const images = imagesArr.map((object, arrayIdx) => {
    return (
      <span
        style={
          object.img === bigImage
            ? { border: "solid green" }
            : { border: "none" }
        }
      >
        {" "}
        <img
          className="thumb"
          key={arrayIdx}
          src={object.img}
          alt={object.city}
          onClick={() => HandleClick(object.img)}
        />
      </span>
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{/* RENDER THE IMAGES ARRAY  */ images}</div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {<img src={bigImage} id="bigimage" alt="bigImage" />}
      </div>
    </div>
  );
}
