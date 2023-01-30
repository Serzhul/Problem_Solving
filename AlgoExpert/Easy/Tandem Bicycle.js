const redShirtSpeeds = [5, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];
const fastest = true;

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => b - a);

  const len = redShirtSpeeds.length;

  let totalMaxSpeed = 0;
  let totalMinSpeed = 0;

  for (let i = 0; i < len; i += 1) {
    const redSpeed = redShirtSpeeds[i];
    const blueSpeed = blueShirtSpeeds[i];

    totalMaxSpeed += Math.max(redSpeed, blueSpeed);
  }

  blueShirtSpeeds.sort((a, b) => a - b);

  for (let i = 0; i < len; i += 1) {
    const redSpeed = redShirtSpeeds[i];
    const blueSpeed = blueShirtSpeeds[i];

    totalMinSpeed += Math.max(redSpeed, blueSpeed);
  }

  return fastest ? totalMaxSpeed : totalMinSpeed;
}

console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest));
