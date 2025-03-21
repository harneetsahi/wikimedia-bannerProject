import React, { memo } from "react";

const Illustration = memo(({ currentIllustration }) => {
  return (
    <>
      <div className="h-full">
        <img
          className="object-cover h-full sm:w-35 pr-7 "
          src={currentIllustration}
          alt="Illustration"
        />
      </div>
    </>
  );
});

export default Illustration;
