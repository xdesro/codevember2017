const ring = anime.timeline({
  duration: 200,
  complete: () => {
    launch.play();
  }
});
ring
  .add({
    targets: ".ring:nth-of-type(2)",
    width: ["100%", "90%"],
    height: ["100%", "90%"]
  })
  .add({
    targets: ".ring:nth-of-type(3)",
    width: ["100%", "80%"],
    height: ["100%", "80%"]
  })
  .add({
    targets: ".ring:nth-of-type(4)",
    width: ["100%", "70%"],
    height: ["100%", "70%"]
  })
  .add({
    targets: ".rocket",
    rotate: ["180deg", "0deg"],
    translateX: ["-50%", "-50%"],
    translateY: ["-100%", "0%"],
    opacity: [0, 1],
    offset: 0,
    easing: "easeInOutQuad",
    duration: 1000
  });

const launch = anime.timeline({
  autoplay: false
});
launch
  .add({
    targets: ".clouds .cloud, .clouds .fill",
    translateY: ["360%", "0"],
    easing: "easeInOutQuad"
  })
  .add({
    targets: ".jet",
    scaleY: [0, 1.1],
    translateX: ["-50%", "-50%"],
    bottom: ["-100%", "-10%"],
    easing: "easeInOutQuad",
    offset: 50
  })
  .add({
    targets: ".rocket",
    top: ["50%", "-15%"],
    easing: "easeInOutQuad",
    offset: 50
  });
