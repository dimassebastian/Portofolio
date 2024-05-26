import React, { useRef, ReactNode, useLayoutEffect } from "react";
import gsap from "gsap";

interface Props {
  children: ReactNode;
}

const AnimatedSplash: React.FC<Props> = ({ children }) => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const t1 = gsap.timeline();

    t1.from(["#text-1", "#text-2", "#text-3"], {
      opacity: 0,
      y: "+=30",
      stagger: 0.5,
    })
      .to(["#text-1", "#text-2", "#text-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.3,
      })
      .to("#intro-slider", {
        opacity: 0,
        duration: 1.3,

        onComplete: () => {
          // After animation completion, remove the component
          if (comp.current && comp.current.parentNode) {
            comp.current.parentNode.removeChild(comp.current);
          }
        },
      });

    return () => {
      // Cleanup function to revert animation when component unmounts
      t1.kill(); // Stop the animation
    };
  }, []);

  return <div ref={comp}>{children}</div>;
};

const Splash: React.FC = () => {
  return (
    <AnimatedSplash>
      <div id="intro-slider" className="splash">
        <div className="text-container">
          <span id="text-1">Dimas</span>
          <span id="text-2">Sebastian</span>
          <span id="text-3">Portfolio.</span>
        </div>
      </div>
    </AnimatedSplash>
  );
};

export default Splash;
