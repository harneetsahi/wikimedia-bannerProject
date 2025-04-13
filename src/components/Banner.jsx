import React, { memo, useEffect, useRef, useState } from "react";
import Image from "./Image";
import Illustration from "./Illustration";
import CloseIcon from "../icons/CloseIcon";

const Banner = memo(
  ({ bannerState, handleBannerImageUpload, currentImage }) => {
    const [showBanner, setShowBanner] = useState(true);
    const buttonRef = useRef(null);

    const hideBanner = () => {
      setShowBanner(false);
    };

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          hideBanner();
        }
      };

      const buttonElement = buttonRef.current;

      if (buttonElement) {
        buttonElement.addEventListener("keydown", handleKeyDown);
        return () => {
          buttonElement.removeEventListener("keydown", handleKeyDown);
        };
      }
    }, [hideBanner]);

    return (
      <>
        {showBanner && (
          <header
            style={{
              backgroundColor: bannerState?.bgColor,
            }}
            className={`w-[calc(100%-2rem)] h-20 transition-all rounded-md shadow-zinc-400 shadow-md relative mt-8  mx-auto`}
          >
            <button
              ref={buttonRef}
              className="absolute -right-2 -top-2 bg-gray-200 rounded-xl p-1 cursor-pointer z-10"
              title="close banner"
            >
              <CloseIcon
                size={"md:size-4 size-2"}
                onClick={hideBanner}
              ></CloseIcon>
            </button>

            <section className="flex h-full overflow-hidden">
              <img
                className="sm:h-10 h-5 sm:pl-4 pl-2 self-center transition-all"
                src="https://meta.wikimedia.org/static/images/icons/metawiki.svg"
                alt="Wikimedia Logo"
              />

              <div
                className={`text-center self-center md:text-xl sm:text-lg text-sm px-2 w-1/2 `}
              >
                <p
                  style={{
                    fontSize: `${bannerState?.fontSize}px`,
                    fontFamily: `${bannerState?.fontFamily}`,
                  }}
                >
                  {bannerState?.heading}
                </p>
              </div>

              <div className="sm:block hidden">
                <Illustration
                  currentIllustration={bannerState?.currentIllustration}
                />
              </div>

              <div className="w-1/2 p-2 ">
                <Image
                  currentImage={currentImage}
                  handleBannerImageUpload={handleBannerImageUpload}
                />
              </div>
            </section>
          </header>
        )}

        {!showBanner && (
          <div className="flex justify-end mt-6">
            <button
              className="bg-[#dbc178] md:px-4 mr-2 px-2 py-2 rounded-lg text-xs text-zinc-900 cursor-pointer "
              onClick={() => setShowBanner(true)}
            >
              Show banner
            </button>
          </div>
        )}
      </>
    );
  }
);

export default Banner;
