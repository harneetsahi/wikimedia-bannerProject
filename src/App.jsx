import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
  const illustrations = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
  ];

  const initialState = {
    heading: "Tea can fix all your problems",
    fontSize: "22",
    bgColor: "#dbc178",
    currentImage:
      "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    currentIllustration: illustrations[0],
    currentIndex: 0,
  };

  const [bannerState, setBannerState] = useState(initialState);

  const handleBannerChange = (e) => {
    const { name, value } = e.target;
    setBannerState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // created a separate function for color change as the react-colorful library handles destructuring differently. It passes color value instead of an event.
  const handleColorChange = (color) => {
    setBannerState((prevState) => ({
      ...prevState,
      bgColor: color,
    }));
  };

  const handleIllustrationChange = (e) => {
    e.preventDefault();

    setBannerState((prevState) => {
      const newIndex = (prevState.currentIndex + 1) % 6;
      return {
        ...prevState,
        currentIndex: newIndex,
        currentIllustration: illustrations[newIndex],
      };
    });
  };

  return (
    <>
      <div className="max-w-300 m-auto ">
        <Navbar />
        <Banner
          bannerState={bannerState}
          handleBannerChange={handleBannerChange}
        />
        <Form
          bannerState={bannerState}
          handleBannerChange={handleBannerChange}
          handleIllustrationChange={handleIllustrationChange}
          handleColorChange={handleColorChange}
        />
      </div>
    </>
  );
}

export default App;
