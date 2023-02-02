const distances = [5, 25, 15, 10, 15];
const fuel = [1, 2, 1, 0, 3];
const mpg = 10;

function validStartingCity(distances, fuel, mpg) {
  let visitedCities = 1;
  let curCity = 0;
  let curFuel = 0;
  let startedCity = 0;
  const len = distances.length;

  while (visitedCities !== len) {
    curFuel += fuel[curCity] * mpg;
    if (curFuel >= distances[curCity]) {
      curFuel -= distances[curCity];
      curCity += 1;
      if (curCity >= len) curCity -= len;
      visitedCities += 1;
    } else {
      visitedCities = 1;
      startedCity += 1;
      curCity = startedCity;
      curFuel = 0;
    }
  }

  return startedCity;
}

console.log(validStartingCity(distances, fuel, mpg));
