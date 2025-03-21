import React, { memo, useState } from "react";
import Image from "./Image";
import Illustration from "./Illustration";
import CloseIcon from "../icons/CloseIcon";

const Banner = memo(
  ({ bannerState, handleBannerImageUpload, currentImage }) => {
    const [showBanner, setShowBanner] = useState(true);

    const hideBanner = () => {
      setShowBanner(false);
    };

    return (
      <>
        {showBanner && (
          <header
            style={{
              backgroundColor: bannerState?.bgColor,
            }}
            className={`w-[calc(100%-2rem)] md:h-25 h-20 transition-all rounded-md shadow-zinc-400 shadow-md relative mt-8  mx-auto`}
          >
            <div
              className="absolute -right-2 -top-2 bg-gray-200 rounded-xl p-1 cursor-pointer z-10"
              title="close banner"
            >
              <CloseIcon
                size={"md:size-4 size-2"}
                onClick={hideBanner}
              ></CloseIcon>
            </div>

            <section className="flex h-full overflow-hidden">
              <img
                className="sm:h-10 h-5 sm:pl-4 pl-2 self-center transition-all animate-bounce"
                src="https://meta.wikimedia.org/static/images/icons/metawiki.svg"
                alt=""
                aria-hidden="true"
              />

              <div
                className={`text-center self-center md:text-xl sm:text-lg text-sm px-2 w-1/2 `}
              >
                <h2
                  style={{
                    fontSize: `${bannerState?.fontSize}px`,
                    fontFamily: `${bannerState?.fontFamily}`,
                  }}
                >
                  {bannerState?.heading}
                </h2>
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
