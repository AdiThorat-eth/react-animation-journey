import React from "react";
import { Link } from "react-router-dom";

const HeroBottomText = () => {
  return (
    //    <div className="font-[lau500] flex justify-center gap-2 bg-red-200 absolute bottom-4 w-full h-25">
    //       <Link className="flex items-center justify-center text-[6vw] uppercase border-3 border-white rounded-full px-8 pt-4">
    //         Work
    //       </Link>
    //       <Link className="flex items-center justify-center text-[6vw] uppercase border-3 border-white rounded-full px-8 pt-4">
    //         Agency
    //       </Link>
    //     </div>
    <div className="font-[lau500] flex items-center gap-2 w-full ml-74">
      <p className="absolute lg:w-[22vw] w-64 lg:right-1 right-0 bottom-28  lg:bottom-32 lg:right-0 font-[lau300] lg:text-[2.1vh] text-xs lg:leading-[1.5] leading-tight">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K72 is an agency that builds brands <br />from every angle. Today, tomorrow
        and years <br />from now. We think the best sparks fly when <br />comfort zones get
        left behind and friction <br /> infuses our strategies, brands and<br />
        communications with real feeling. We’re <br />transparent, honest and say what
        we mean, <br />and when we believe in something, we’re all <br />in.
      </p>
      <Link className="flex items-center justify-center text-[7vw] uppercase border-3 border-white rounded-full px-8 pt-4 h-26 mr-3">
        Work
      </Link>
      <Link className="flex items-center justify-center text-[7vw] uppercase border-3 border-white rounded-full px-8 pt-4 h-26">
        Agency
      </Link>
    </div>
  );
};

export default HeroBottomText;
