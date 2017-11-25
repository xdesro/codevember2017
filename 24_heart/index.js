const timeline = anime
  .timeline({
    loop: true,
    easing: "easeInOutQuad",
    duration: 1000
  })
  .add({
    targets: "#square",
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 500
  })
  .add({
    targets: "#circle-left, #circle-right",
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 500
  })
  .add({
    targets: "#circle-right",
    translateX: [-60, 0],
    duration: 500
  })
  .add({
    targets: "#circle-left",
    translateY: [60, 0],
    offset: "-=500",
    duration: 500
  })
  .add({
    targets: "#svg",
    rotate: "-45deg",
    translateX: -10,
    translateY: -20,
    duration: 500
  })
  .add({
    targets: "#heart",
    opacity: [0, 1],
    duration: 500
  })
  .add({
    targets: "#svg",
    opacity: [1, 0],
    duration: 500,
    rotate: ["-45deg", "-135deg"],
    scale: 0.2,
    translateY: -10,
    translateX: -10
  });
