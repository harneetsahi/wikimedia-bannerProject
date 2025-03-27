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
    fontFamily: "exo",
    bgColor: "#dbc178",
    currentIllustration: illustrations[0],
    currentIndex: 0,
  };

  const [bannerState, setBannerState] = useState(() => {
    const savedState = localStorage.getItem("bannerState");
    return savedState ? JSON.parse(savedState) : initialState;
  });

  const [currentImage, setCurrentImage] = useState(
    "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );

  const handleBannerChange = (e) => {
    const { name, value } = e.target;
    setBannerState((prevState) => {
      const newState = { ...prevState, [name]: value };
      localStorage.setItem("bannerState", JSON.stringify(newState));
      return newState;
    });
  };

  // created a separate function for color change as the react-colorful library handles destructuring differently. It passes color value instead of an event.
  const handleColorChange = (color) => {
    setBannerState((prevState) => {
      const newState = { ...prevState, bgColor: color };
      localStorage.setItem("bannerState", JSON.stringify(newState));
      return newState;
    });
  };

  const handleIllustrationChange = (e) => {
    e.preventDefault();

    setBannerState((prevState) => {
      const newIndex = (prevState.currentIndex + 1) % 6;
      const newState = {
        ...prevState,
        currentIndex: newIndex,
        currentIllustration: illustrations[newIndex],
      };
      localStorage.setItem("bannerState", JSON.stringify(newState));
      return newState;
    });
  };

  const handleBannerImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (bannerState.currentImage) {
        URL.revokeObjectURL(bannerState.currentImage);
      }

      const imageUrl = URL.createObjectURL(file);
      setCurrentImage(imageUrl);
    }
  };

  return (
    <>
      <div className="max-w-300 m-auto ">
        <Navbar />
        <Banner bannerState={bannerState} currentImage={currentImage} />
        <Form
          bannerState={bannerState}
          handleBannerChange={handleBannerChange}
          handleIllustrationChange={handleIllustrationChange}
          handleColorChange={handleColorChange}
          handleBannerImageUpload={handleBannerImageUpload}
        />
      </div>
    </>
  );
}

export default App;
