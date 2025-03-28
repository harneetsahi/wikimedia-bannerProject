import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useClickedOutside } from "../hooks/useClickedOutside";
import CameraIcon from "../icons/CameraIcon";
import RepeatIcon from "../icons/RepeatIcon";

const Form = memo(
  ({
    bannerState,
    handleBannerChange,
    handleIllustrationChange,
    handleColorChange,
    handleBannerImageUpload,
  }) => {
    const showPicker = useRef();
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const closePicker = useCallback(() => setIsPickerOpen(false), []);

    useClickedOutside(showPicker, closePicker);

    return (
      <>
        <main className=" bg-[#e2d9be73] font-roboto text-zinc-700 rounded-md shadow-xl md:w-1/2 mx-3 my-10 md:mx-auto pt-8">
          <h1 className="text-center md:text-xl text-lg ">
            Customize the banner
          </h1>
          <form className="p-8 flex flex-col gap-6 md:text-md text-sm">
            <div>
              <label htmlFor="text">
                Change banner text
                <input
                  className="w-full border-1 border-gray-300 bg-[#ffffff9c] rounded-lg px-2 py-2 mt-2"
                  placeholder="Type new text"
                  type="text"
                  id="text"
                  name="heading"
                  value={bannerState.heading}
                  onChange={handleBannerChange}
                />
              </label>
            </div>

            <div>
              <label htmlFor="fontsize">
                {" "}
                Change font size
                <input
                  type="range"
                  id="fontsize"
                  min="11"
                  max="36"
                  name="fontSize"
                  value={bannerState.fontSize}
                  className="block mt-2 cursor-pointer accent-[#dbc178]"
                  onChange={handleBannerChange}
                />
              </label>
            </div>

            <div>
              <label htmlFor="fontFamily">
                {" "}
                Change font family
                <select
                  name="fontFamily"
                  id="fontFamily"
                  onChange={handleBannerChange}
                  className="ml-2 border-1 border-gray-300 bg-[#ffffff9c] rounded-md px-2 py-1"
                >
                  <option value="exo">Exo</option>
                  <option value="roboto">Roboto</option>
                  <option value="oswald">Oswald</option>
                  <option value="monospace">Monospace</option>
                  <option value="lato">Lato</option>
                  <option value="arial">Arial</option>
                  <option value="cursive">Cursive</option>
                  <option value="times">Times</option>
                </select>
              </label>
            </div>

            <div>
              <p>Change background color</p>
              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  aria-label="Change background color"
                  className="w-8 h-8 mt-2 rounded-lg cursor-pointer border-2 border-white"
                  style={{ backgroundColor: bannerState.bgColor }}
                  onClick={() => setIsPickerOpen(true)}
                  data-testid="bgColor"
                >
                  {isPickerOpen && (
                    <div ref={showPicker}>
                      <HexColorPicker
                        color={bannerState.bgColor}
                        name="bgColor"
                        id="bgColor"
                        data-testid="color-picker"
                        value={bannerState.bgColor}
                        onChange={handleColorChange}
                      />
                    </div>
                  )}
                </button>
                <p className="text-zinc-700 pt-2">
                  Hex code: {bannerState.bgColor}
                </p>
              </div>
            </div>

            <div>
              <p>Click the icon to change the illustration</p>
              <button
                onClick={handleIllustrationChange}
                data-testid="illustration-element"
                type="button"
                aria-label="Change banner illustration"
              >
                <RepeatIcon className={"size-8 p-1 cursor-pointer"} />
              </button>
            </div>

            <div data-testid="camera-element">
              <label htmlFor="image">
                Upload a new image
                <input
                  className="block mt-2 w-full border border-gray-200 shadow-sm rounded-lg text-sm file:bg-[#ffffff9c] file:border-0 file:me-4 file:py-2 file:px-4"
                  data-testid="image-element"
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleBannerImageUpload}
                />
              </label>
            </div>
          </form>
        </main>
      </>
    );
  }
);

export default Form;
