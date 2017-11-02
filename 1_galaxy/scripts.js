let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let halfWindowWidth = windowWidth / 2;
let halfWindowHeight = windowHeight / 2;
class Rectangle {
  constructor(x, y, width, height, color) {
    this.shape = 'rectangle';
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
}
class Circle {
  constructor(x, y, radius, color) {
    this.shape = 'circle';
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
}
const makeGrid = width => (halfWindowWidth / 18) * width;
const getRandomStarPosition = (axis) => {
  const randomAngle = Math.random() * Math.PI * 2;
  const randomRadius = Math.random() * makeGrid(3) + makeGrid(3.5);
  let offset;
  if(axis == "x") {
    offset = halfWindowWidth;
  } else {
    offset = halfWindowHeight;
  }
  return offset + randomRadius * Math.cos(randomAngle);
};

const colors = {
  background: '#f4e8dc',
  ring1: ['#2a333c', '#4d5558'],
  ring2: ['#212830', '#484f55'],
  ring3: ['#18202b', '#353e47'],
  ring4: ['#1a222d', '#353e47'],
  ring5: ['#1a222d', '#5f6670'],
  ring6: ['#1a222d', '#3c444f'],
  planet: ['#ac3a3a', '#c86f6b'],
};
const shapes = {
  backgroundRect: new Rectangle(
    0,
    0,
    windowWidth,
    windowHeight,
    colors.background,
  ),
  ring1: new Circle(
    halfWindowWidth,
    halfWindowHeight,
    makeGrid(9),
    colors.ring1,
  ),
  ring2: new Circle(
    halfWindowWidth,
    halfWindowHeight,
    makeGrid(7),
    colors.ring2,
  ),
  ring3: new Circle(
    halfWindowWidth,
    halfWindowHeight,
    makeGrid(6),
    colors.ring3,
  ),
  ring4: new Circle(
    halfWindowWidth,
    halfWindowHeight,
    makeGrid(5.5),
    colors.ring4,
  ),
  ring5: new Circle(
    halfWindowWidth,
    halfWindowHeight,
    makeGrid(4.6),
    colors.ring5,
  ),
  ring6: new Circle(
    halfWindowWidth,
    halfWindowHeight,
    makeGrid(4.3),
    colors.ring6,
  ),
  planet: new Circle(
    halfWindowWidth,
    halfWindowHeight,
    makeGrid(3.6),
    colors.planet,
  ),
};
const drawShape = (geometry, context) => {
  context.beginPath();
  if (geometry.shape === 'rectangle') {
    context.rect(geometry.x, geometry.y, geometry.width, geometry.height);
    context.fillStyle = geometry.color;
  } else if (geometry.shape === 'circle') {
    context.arc(geometry.x, geometry.y, geometry.radius, 0, 2 * Math.PI);
    const fillGradient = context.createLinearGradient(
      geometry.x,
      geometry.y + geometry.radius,
      geometry.x + geometry.radius,
      geometry.y,
    );
    geometry.color.forEach((val, i) => {
      fillGradient.addColorStop(i, val);
    });
    context.fillStyle = fillGradient;
  }
  context.fill();
};
const drawPlanet = (src, ctx) => {
  const planet = new Image();
  planet.src = src;
  planet.onload = () => {
    const planetWidth = planet.width;
    const planetHeight = planet.height;
    ctx.translate(makeGrid(3.6) * -1, makeGrid(3.6) * -1);
    ctx.drawImage(planet, halfWindowWidth, halfWindowHeight, makeGrid(3.6) * 2, makeGrid(3.6) * 2)
  };
};
const drawStars = (ctx) => {
  const randomNumber = Math.random()
  // Circles
  ctx.beginPath();
  ctx.strokeStyle = `rgba(255,255,255, ${randomNumber})`;
  ctx.arc(getRandomStarPosition('x'), getRandomStarPosition('y'), 3, 0, Math.PI * 2);
  ctx.stroke();
  // Dots
  ctx.beginPath();
  ctx.fillStyle = `rgba(255,255,255, ${randomNumber})`;
  ctx.arc(getRandomStarPosition("x"), getRandomStarPosition("y"), 3, 0, Math.PI * 2);
  ctx.fill();
  // Diamonds
  const diamondX = getRandomStarPosition("x");
  const diamondY = getRandomStarPosition("y");
  ctx.beginPath();
  ctx.fillStyle = `rgba(255,255,255, ${randomNumber})`;
  ctx.moveTo(diamondX, diamondY - 5);
  ctx.quadraticCurveTo(diamondX, diamondY, diamondX + 5, diamondY);
  ctx.quadraticCurveTo(diamondX, diamondY, diamondX, diamondY + 5);
  ctx.quadraticCurveTo(diamondX, diamondY, diamondX - 5, diamondY);
  ctx.quadraticCurveTo(diamondX, diamondY, diamondX, diamondY - 5);
  ctx.closePath();
  ctx.fill();
  
};

window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const doTheThing = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    halfWindowWidth = windowWidth / 2;
    halfWindowHeight = windowHeight / 2;
    ctx.clearRect(0, 0, windowWidth, windowHeight);

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    for (const shape in shapes) {
      drawShape(shapes[shape], ctx);
    }
    
    for (let i = 0; i < 10; i += 1) {
      drawStars(ctx);
    }
    drawPlanet("./planet.svg", ctx);
  };
  
  doTheThing();
  
  window.addEventListener('resize', () => {
    doTheThing();
  });
};