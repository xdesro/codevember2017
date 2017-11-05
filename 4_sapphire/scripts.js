
const timeline = anime.timeline({
  autoplay: false
});

const URL = "coin.mp3";

const audioCtx = new AudioContext();

let coinBuffer;

window
  .fetch(URL)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    coinBuffer = audioBuffer;
    timeline.play();
  });

function play(audioBuffer) {
  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioCtx.destination);
  source.start();
}

timeline.add({
    targets: "#gem",
    translateX: ["-100vh", 0],
    rotate: [-300, 0],
    duration: 1000
  })
  .add({
    targets: "#sheen path",
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 400,
    delay: function(el, i) {
      return i * 20;
    },
    elasticity: 100,
    easing: "easeInQuart"
  })
  .add({
    targets: "#stars path",
    scale: [0, 1],
    rotate: [180, 0],
    delay: function(el, i) {
      return i * 100;
    },
    translateX: 0,
    opacity: [0, 1],
    translateY: 0,
    duration: 500,
    begin: (anim) => {
        play(coinBuffer);
    }
  });
    