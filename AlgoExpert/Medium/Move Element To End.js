const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;

// Solution 1 : Splice 사용

// function moveElementToEnd(array, toMove) {
//   let idx = 0;
//   let count = 0;

//   while (count < array.length) {
//     const cur = array[idx];

//     if (cur === toMove) {
//       const target = array.splice(idx, 1);
//       array.push(...target);
//     } else {
//       idx += 1;
//     }
//     count += 1;
//   }

//   return array;
// }

// Solution 2
function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] === toMove) {
      if (array[right] !== toMove) {
        [array[left], array[right]] = [array[right], array[left]];
      } else {
        right -= 1;
      }
    } else {
      left += 1;
    }
  }

  return array;
}

console.log(moveElementToEnd(array, toMove));
