import React, { useEffect, useState } from "react";

import GravatarList from "./Components/GravatarList";
import Header from "./Components/Header";
import { calculateNumberOfImages } from "./utility/utils";

const App = () => {
  
  const generateImages = (newNumber) => {
    return Array.from(Array(newNumber).keys()).map((_,index) => ({ id: index }) )
  }

  const [images, setImages] = useState(generateImages(calculateNumberOfImages()));

  useEffect(() => {
    window.addEventListener("scroll", recalculate);

    window.addEventListener("resize", recalculate);

    return () => {
      window.removeEventListener("scroll", recalculate);
      window.removeEventListener("resize", recalculate);
    }
  });

  const recalculate = () => {
    
    var newAmountOfImages = calculateNumberOfImages();

    if (newAmountOfImages > images.length){
      setImages(generateImages(newAmountOfImages));
    }
  }

  return (
    <div>
      <Header />
      <GravatarList images={images} />
    </div>
  );
};

export default App;
