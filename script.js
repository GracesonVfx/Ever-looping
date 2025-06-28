Shery.imageEffect("#back", {
  style: 6,
  config: {
    noiseDetail: { value: 7.44, range: [0, 100] },
    distortionAmount: { value: 2.98, range: [0, 10] },
    scale: { value: 36.36, range: [0, 100] },
    speed: { value: 0.79, range: [0, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.943762782940924 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.07, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.09, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.5, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.62, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 9.92, range: [0, 100] },
  },
  gooey: true,
});

var elem = document.querySelectorAll(".elem");
elem.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var main = document.querySelector("#main");
  var index = 0;
  var animating = false;

  main.addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: function () {
          // Move the current h1 back to top: 100% after animation
          gsap.set(this._targets[0], {
            top: "100%",
          });
          animating = false;
        },
      });

      index == h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "0%",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  });
});
