/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 500
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "#fff"
        },
        polygon: {
          nb_sides: 4
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 0.1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 50,
        color: "#ffffff",
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.5 /**bubble speed */,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 50,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover"
    }
  }
);
