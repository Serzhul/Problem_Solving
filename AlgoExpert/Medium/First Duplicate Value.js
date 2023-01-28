const array = [2, 1, 5, 3, 3, 2, 4];

// Solution 1: Time Complexity O(n) Space Complexity O(n)
// function firstDuplicateValue(array) {
//   const map = {};

//   for (let i = 0; i < array.length; i += 1) {
//     const cur = array[i];

//     if (map[cur]) return cur;
//     map[cur] = 1;
//   }

//   return -1;
// }

// Solution 2: Time Complexity O(n) Space Complexity O(1)
function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i += 1) {
    const cur = Math.abs(array[i]);

    if (array[cur - 1] < 0) return cur;

    array[cur - 1] *= -1;
  }

  return -1;
}

console.log(firstDuplicateValue(array));
