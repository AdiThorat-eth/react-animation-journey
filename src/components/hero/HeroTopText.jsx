import React from "react";
import Video from "./Video";

const HeroTopText = () => {
  return (
    <div className="font-[lau300] pt-2 text-center mr-17 mt-1">
      <div className="text-[9vw] uppercase leading-[8.5vw] flex item-center justify-center">
        The spark for
      </div>
      <div className="text-[9vw] uppercase leading-[8.5vw] flex item-start justify-center">
        all
        <div className="h-[7vw] w-[16vw] rounded-full mt-1 overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9vw] uppercase leading-[8.5vw] flex items-center justify-center">
        <div className="relative inline-block">
          creative
          <svg
            viewBox="0 0 322.8125 59.3125"
            style={{ transform: "scale(-1, 1)" }}
            className="absolute -bottom-25 left-78 -translate-x-1/2 w-[43vw] h-[25vw]"
          >
            <ellipse
              cx="161.40625"
              cy="29.65625"
              rx="159.40625"
              ry="27.65625"
              fill="none"
              stroke="#d0ff14ff" // neon green
              strokeWidth="1"
              className="animate-circle"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroTopText;
