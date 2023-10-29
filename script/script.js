particlesJS("particles-js", {
    particles: {
      number: { value: 4, density: { enable: true, value_area: 600 } },
      color: { value: "#f5e292" },
      shape: {
        type: "star",
        stroke: { width: 0, color: "#f2abab" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.23175341436711333,
          sync: false
        }
      },
      size: {
        value: 2,
        random: false,
        anim: { enable: true, speed: 0, size_min: 0, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 157.83201938177186,
        color: "#ffffff",
        opacity: 0,
        width: 0.4734960581453156
      },
      move: {
        enable: true,
        speed: 6.313280775270874,
        direction: "bottom-right",
        random: false,
        straight: true,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 3551.220436089867, rotateY: 600 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 131.85970127784034,
          size: 4,
          duration: 0.9589796456570205,
          opacity: 1,
          speed: 3
        },
        repulse: { distance: 119.87245570712759, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });