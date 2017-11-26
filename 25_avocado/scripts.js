let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

const avocado = {
  letters: "avocado".split(""),
  colors: [0x92A96D, 0x005800, 0x4A3F2B],
  styleOptions: {
    fontFamily: "Josefin Slab",
    fontSize: 32,
    letterSpacing: 4
  }
}

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}
const renderer = PIXI.autoDetectRenderer(windowWidth, windowHeight, {
  antialias: false,
  transparent: false,
  resolution: 1
});
renderer.view.style.position = "absolute";
renderer.backgroundColor = 0xece2d0;
document.body.appendChild(renderer.view);

const stage = new PIXI.Container();
const canvas = document.getElementsByTagName("canvas");

document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  event = event || window.event;
}

canvas[0].addEventListener("click", () => {
  let newText = new PIXI.Container();
  avocado.letters.forEach((letter, i) => {
    let letterSprite = new PIXI.Text(letter, avocado.styleOptions);
    letterSprite.position.set(event.pageX - 60 + i * 20, event.pageY - 20);
    letterSprite.style.fill = avocado.colors[Math.floor(Math.random() * avocado.colors.length)];
    newText.addChild(letterSprite);
    newText.vx = 0;
    newText.vy = i * 0.5;
  });
  stage.addChild(newText);
});

renderer.render(stage);

const animate = () => {
  requestAnimationFrame(animate);
  stage.children.forEach(el => {
    el.vy += Math.random() / 3;
    el.y += el.vy;
  });
  renderer.render(stage);
};
animate();
