import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const [showMain, setShowMain] = useState(false);
  //on main change
  useEffect(() => {
    console.log(showMain);
  }, [showMain]);
  //animation of text
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowMain(true);
      },
    });
    tl.to(".vi-mask-group", {
      scale: 30,
      duration: 2,
      delay: 0.5,
      transformOrigin: "50% 50%",
      ease: "power2.inOut",
    });
    tl.to(".vi-mask-group", {
      rotate: 90,
      duration: 2,
      delay: -2,
      transformOrigin: "50% 50%",
      ease: "power2.inOut",
    });
    tl.to(".vi-mask-group", { opacity: 0, duration: 0.5, delay: -1 });
  });
  return (
    <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden text-white bg-black ">
      {!showMain && (
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          className=""
        >
          <defs className="">
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g
                className="vi-mask-group  "
                style={{
                  transformBox: "view-box",
                  transformOrigin: "50% 50%  ",
                }}
              >
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="black"
                  fontSize="250"
                  className="text-center"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          {/* <rect width="100%" height="100%" fill="white" mask="url(#viMask)" /> */}
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      )}
      <div>
        <h1>Main content</h1>
      </div>
    </div>
  );
};

export default App;
