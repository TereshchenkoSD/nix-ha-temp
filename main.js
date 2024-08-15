const coordinates = {
  x: 3,
  y: 2,
};

const a = 1;
const b = 2;

const calculate = function (x1, x2) {
  return x1 + x2;
};

const latitude = calculate(a, b);
const longitude = calculate(3, 4);

function run(coordinates, latitude, longitude) {
  const { x, y } = coordinates;

  return latitude * x + longitude * y;
}

console.log(run(coordinates, latitude, longitude));
