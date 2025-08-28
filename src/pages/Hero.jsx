import React, { useEffect, useState } from "react";
import Video from "../components/hero/Video";
import HeroTopText from "../components/hero/HeroTopText";
import HeroBottomText from "../components/hero/HeroBottomText";

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Toronto", // Montreal timezone
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="absolute top-1 left-2 z-10 color-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="60"
          viewBox="0 0 103 44"
        >
          <path
            fill="#FFFFFF"
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HeroTopText />
        <HeroBottomText />
      </div>

      <div className="c-clock absolute bottom-0 left-5 text-xl text-white font-[lau500] z-20 flex items-center gap-2">
  <svg role="img" aria-label="Globe icon" className="w-6 h-6 fill-#ffff">
    <use xlinkHref="assets/images/sprite.svg#globe"></use>
  </svg>
  <span>MONTREAL_{time}</span>
</div>

    </div>
  );
};

export default Hero;
