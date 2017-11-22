const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let viewMin;
ctx.strokeRect(0, 0, canvas.width, canvas.height);
if (window.outerWidth > window.outerHeight) {
  canvas.width = window.outerHeight / 2;
  canvas.height = window.outerHeight / 2;
  viewMin = true;
} else {
  canvas.width = window.outerWidth / 2;
  canvas.height = window.outerWidth / 2;
  viewMin = false;
}

const rectSize = viewMin ? canvas.height / 16 : canvas.width / 16;

let black = "#111";
let grey2 = "#545359";
let grey1 = "#d7d6dc";
let white = "#fbfbfb";

const trooper = [
  [black, black, black, black, grey1, white, white, white],
  [black, black, black, grey1, white, white, white, white],
  [black, black, grey1, white, white, white, white, white],
  [black, black, grey1, white, white, white, white, white],
  [black, black, black, black, black, grey2, grey2, grey2],
  [black, black, grey1, grey1, grey1, grey1, grey1, grey1],
  [black, black, grey1, black, black, grey2, black, white],
  [black, grey1, grey1, black, grey2, black, white, grey1],
  [black, grey1, grey1, black, white, white, grey1, white],
  [black, grey1, black, white, white, white, white, grey1],
  [grey1, grey1, grey1, white, white, grey1, grey1, grey2],
  [grey1, grey1, white, grey1, grey1, black, grey2, white],
  [grey1, white, white, grey1, black, white, white, white],
  [black, grey1, grey1, white, white, white, white, grey1],
  [black, black, grey1, white, grey2, grey2, white, black],
  [black, black, grey1, white, grey2, black, white, black],
  [black, black, black, grey1, white, white, white, black]
];

let xCount = 0;
let yCount = 0;

trooper.forEach(el => {
  xCount = 0;
  el.forEach(color => {
    ctx.fillStyle = color;
    ctx.fillRect(xCount, yCount, rectSize, rectSize);
    xCount += rectSize;
  });
  yCount += rectSize;
});
yCount = 0;
trooper.forEach(el => {
  xCount = el.length * rectSize * 2 - rectSize;
  el.forEach(color => {
    ctx.fillStyle = color;
    ctx.fillRect(xCount, yCount, rectSize, rectSize);
    xCount -= rectSize;
  });
  yCount += rectSize;
});
