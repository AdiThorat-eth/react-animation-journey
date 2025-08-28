import React from "react";
import Video from "./Video";

const HeroTopText = () => {
  return (
    <div className="font-[lau300] pt-2 text-center mr-17">
      <div className="text-[9vw] uppercase leading-[9vw] flex item-center justify-center">The spark for</div>
      <div className="text-[9vw] uppercase leading-[9vw] flex item-start justify-center">
        all
        <div className="h-[7vw] w-[16vw] rounded-full mt-1 overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9vw] uppercase leading-[9vw] flex item-center justify-center">creative</div>
    </div>
  );
};

export default HeroTopText;
