
$(document).ready(function() {
  let colors = [];
  for (let i = 0; i < 20; i += 1) {
    createRandomColor(colors);
  }
  animate(colors);
  anime({
    targets: ".will-you-shut-up",
    rotate: 5,
    delay: 500
  })
  $('.will-you-shut-up').click((e) => {
    e.preventDefault;
    animate(colors);
  })
}) 

const invertColor = hex => {
  let color = hex;
  color = color.substring(1); // remove #
  color = parseInt(color, 16); // convert to integer
  color = 0xffffff ^ color; // invert three bytes
  color = color.toString(16); // convert to hex
  color = ("000000" + color).slice(-6); // pad with leading zeros
  color = "#" + color; // prepend #
  return color;
};
const createRandomColor = colors => {
  let color;
  color = Math.floor(Math.random() * 0x1000000);
  color = color.toString(16);
  color = ("000000" + color).slice(-6);
  color = "#" + color;
  colors.push(color);
};
const getRandomColor = colorsArray => {
  const i = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[i];
};
const animate = (colors) => {
  anime({
    targets: "#card",
    scale: [0, 1]
  });
  const randomColor = getRandomColor(colors);
  const invertedColor = invertColor(randomColor);
  $("#card").css("background", randomColor);
  $("body").css("background", invertedColor);
  $("#board").css("fill", invertedColor);
  $("#shut-up").css("fill", randomColor);
};