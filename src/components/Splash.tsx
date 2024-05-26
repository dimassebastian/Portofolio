import React, { useRef, useLayoutEffect } from "react";
import "./splash.css";
import gsap from "gsap";

const Splash: React.FC = () => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from("#intro-slider", {
        opacity: 1,
        duration: 0.8,
      })

        .from(["#text-1", "#text-2", "#text-3"], {
          opacity: 1,

          stagger: 0.00005,
        })
        .to(["#text-1", "#text-2", "#text-3"], {
          opacity: 0,
          duration: 0.5,
          delay: 0.3,
          stagger: 0.05,
        })
        .to(["#intro-slider"], {
          opacity: 0,
          duration: 1.3,
        })
        .to(["#intro-slider"], {
          xPercent: "-100",
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <div id="intro-slider" className="splash">
        <div className="text-container">
          <h1 id="text-1">Dimas</h1>
          <h1 id="text-1">Sebastian</h1>
          <span id="text-3">Portofolio.</span>
        </div>
      </div>
    </div>
  );
};

export default Splash;
