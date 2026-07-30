import React from 'react'
import Header from './Component/Header'
import Midheader from './Component/Midheader'
import Lowerheader from './Component/Lowerheader'
import Carousel from './Component/Carousel'
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";

const App = () => {
  const images = [slide1, slide2, slide3];

  return (
    <div>
      <Header />
      <Midheader />
      <Lowerheader />

      <div className="max-w-screen-2xl mx-auto flex items-center px-4 sm:px-6 lg:px-6 pt-2">
        <Carousel items={images} autoPlay={true} interval={4000} loop={true} />
      </div>
    </div>
  );
};

export default App;