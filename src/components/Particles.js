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
          value: 80
        },

        move: {
          enable: true,
          speed: {min:1, max:1}
        },

        color: {
          value: "525252"
        },

        links : {
          enable: true,
          distance: 150,
          color: "525252"
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