import React, { memo } from "react";
import CameraIcon from "../icons/CameraIcon";

const Image = memo(({ currentImage }) => {
  return (
    <>
      <div className=" relative h-full">
        {currentImage && (
          <div className="h-full">
            <img
              data-testid="image-element"
              src={currentImage}
              alt=""
              className="object-cover h-full w-full rounded-md "
            />
          </div>
        )}

        <label
          htmlFor="image"
          data-testid="camera-icon-element"
          className="absolute right-2 bottom-2 bg-gray-200/90 p-1 rounded-xl "
        >
          <CameraIcon className="md:size-4 size-2 cursor-pointer" />
        </label>
      </div>
    </>
  );
});

export default Image;
