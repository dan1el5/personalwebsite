import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import {useCallback, useMemo} from "react";

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: false,
        zIndex: 0
      },

      particles: {
        number: {
          value: 140
        },

        move: {
          enable: true,
          speed: {min:2, max:5}
        },

        color: {
          value: "e54140"
        },

        links : {
          enable: true,
          distance: 150,
          color: "e54140"
        },

        shape: {
          type: "square",
        },
      },

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse"
          },

          onHover: {
            enable: true,
            mode: "grab"
          },
        },

        modes: {
          repulse: {
            radius: 5,
            duration: 0.5
          },

          grab: {
            distance: 200
          }
        },
      },

    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;