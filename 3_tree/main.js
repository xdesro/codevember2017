anime({
  targets: ".mask",
  scale: [0,1],
  rotate: ['-100deg', '45deg'],
  duration: 1200,
  autoplay:true,
  easing: 'easeOutElastic',
  elasticity: 400
})
anime({
  targets: ".clouds",
  translateX: [-190, 60],
  loop: true,
  easing: "linear",
  duration: 20000,
  autoplay: true
});
anime({
  targets: ".clouds.lower",
  translateX: [-250, 150],
  translateY: [50, 50],
  scale: [0.5, 0.5],
  duration: 60000,
  easing: "linear",
  loop: true,
  autoplay: true
});
