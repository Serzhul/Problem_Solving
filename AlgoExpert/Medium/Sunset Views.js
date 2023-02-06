const buildings = [3, 5, 4, 4, 3, 1, 3, 2];
const direction = "WEST";

// Solution 1 : Brute Force
// function sunsetViews(buildings, direction) {
//   const res = [];

//   if (direction === "EAST") {
//     for (let i = 0; i < buildings.length; i += 1) {
//       const cur = buildings[i];
//       let idx = i + 1;
//       let canSeeSunset = true;

//       while (idx <= buildings.length) {
//         if (cur <= buildings[idx]) {
//           canSeeSunset = false;
//           break;
//         }
//         idx += 1;
//       }
//       if (canSeeSunset) res.push(i);
//     }
//   } else {
//     for (let i = buildings.length - 1; i >= 0; i -= 1) {
//       const cur = buildings[i];
//       let idx = i - 1;
//       let canSeeSunset = true;

//       while (idx >= 0) {
//         if (cur <= buildings[idx]) {
//           canSeeSunset = false;
//           break;
//         }
//         idx -= 1;
//       }

//       if (canSeeSunset) res.unshift(i);
//     }
//   }

//   return res;
// }

// Solution2
function sunsetViews(buildings, direction) {
  const res = [];
  let maxHeight = Number.MIN_SAFE_INTEGER;
  if (direction === "EAST") buildings.reverse();

  for (let i = 0; i < buildings.length; i += 1) {
    const buildingHeight = buildings[i];
    if (buildingHeight > maxHeight) {
      maxHeight = buildingHeight;
      res.push(direction === "EAST" ? buildings.length - i - 1 : i);
    }
  }
  return direction === "EAST" ? res.reverse() : res;
}

console.log(sunsetViews(buildings, direction));
