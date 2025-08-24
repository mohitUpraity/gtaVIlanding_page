import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const [showMain, setShowMain] = useState(false);
  const [isMainAnimated, setIsMainAnimated] = useState(false);

  useGSAP(() => {
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      console.log(xMove);
      gsap.to(".character-layer", { x: xMove * 0.8 });
      gsap.to(".buildings-layer", { x: xMove * 0.4 });
      gsap.to(".sky-layer", { x: xMove * 0.3 });
      gsap.to(".main-text", { x: xMove * -1.5 });
    });
  }, [showMain]);

  //on main change

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
  // after loading main content animation
  useGSAP(() => {
    const tl = gsap.timeline({ onComplete: () => {} });
    tl.from(".sky-layer", {
      rotate: -50,
      scale: 4,
      duration: 2,
      ease: "power2.out",
    });
    tl.from(".buildings-layer", {
      rotate: -20,
      scale: 3,
      duration: 3,
      delay: -1,
      ease: "power1.Out",
    });
    tl.from(".character-layer", {
      rotate: -30,
      scale: 4,
      duration: 2,
      delay: -2,
      ease: "power2.inOut",
    });
    tl.from(".main-text", {
      // rotate: -30,
      // y: 200,
      scale: 10,
      duration: 2,
      delay: -2,
      ease: "power2.inOut",
    });
    tl.from(".main-text", {
      // rotate: -30,
      y: -40,
      // scale: 10,
      duration: 2,
      delay: 0,
      ease: "power4.Out",
    });
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
            href="./cloud-sky.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
          <image
            href="./bg-transparent.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      )}
      <div className=" main w-screen h-screen relative overflow-hidden bg-black ">
        {/* Sky Layer */}
        <div className=" sky-layer absolute inset-0 flex items-center justify-center  bg-[url(./cloud-sky.png)] bg-cover bg-center">
          {/* <img
            src="./cloud-sky.png"
            alt="sky"
            className="max-w-none w-auto h-full object-cover"
          /> */}
        </div>

        {/* Buildings Layer */}
        <div
          className="  absolute inset-0 flex items-center justify-center 
        "
        >
          {/* bg-[url(./bg-transparent.png)] bg-cover bg-center */}

          <img
            src="./bg-transparent.png"
            alt="buildings"
            className=" buildings-layer max-w-none w-full h-full object-cover"
          />
        </div>
        {/* title layer */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between font-sans "
          style={{ fontFamily: "black" }}
        >
          <header>
            <h1 className="text-xl text-center">navbar</h1>
          </header>
          <main className=" main-text font-bold text-center flex flex-col gap-3 text-8xl lg:text-[12rem] ">
            <h1 className="-translate-x-24 underline">grand</h1>
            <h1 className=" underline">theft</h1>
            <h1 className="-translate-x-22 underline">auto</h1>
          </main>
          <footer>
            <p className="text-xl text-center">Footer Content</p>
          </footer>
        </div>

        {/* Character Layer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <img
            src="./character-simple.png"
            alt="character"
            className="character-layer w-[30vw] h-auto object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default App;
