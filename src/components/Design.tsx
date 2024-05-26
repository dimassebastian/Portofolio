import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { useLocation } from "react-router-dom";
//import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Design = () => {
  const [init, setInit] = useState(false);
  const location = useLocation();
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("initParticlesEngine called");
      if (location.pathname !== "/info") {
        console.log("Loading full particles engine");
        await loadFull(engine);
      } else {
        console.log("Skipping particles initialization on /info page");
      }

      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, [location.pathname]);

  useEffect(() => {
    // Apply cursor class based on the current route
    if (location.pathname === "/info") {
      document.body.classList.remove("hide-cursor");
      document.body.classList.add("show-cursor");
    } else {
      document.body.classList.remove("show-cursor");
      document.body.classList.add("hide-cursor");
    }
  }, [location.pathname]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "remove",
          },
          onHover: {
            enable: true,
            mode: "trail",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          bubble: {
            distance: 500,
            size: 3,
            duration: 1,
          },
          trail: {
            delay: 0.05,
            quantity: 1,
            pauseOnStop: true,
          },
          remove: {
            quantity: 2,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#8B8B8B",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: MoveDirection.right,
          enable: true,
          outModes: {
            default: OutMode.destroy,
          },
          random: false,
          speed: 1,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotatey: 1600,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 10,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
        duration: 0.2,
      },
      detectRetina: true,
    }),
    []
  );

  if (location.pathname !== "/info" && init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <> </>;
};
export default Design;
