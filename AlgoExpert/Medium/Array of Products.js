const array = [5, 1, 4, 2];

// function arrayOfProducts(array) {
//   const res = [];

//   const len = array.length;

//   const leftArr = Array.from({ length: len }, () => 1);
//   const rightArr = Array.from({ length: len }, () => 1);

//   let products = 1;

//   for (let i = 0; i < len; i += 1) {
//     const cur = array[i];

//     leftArr[i] = products;
//     products *= cur;
//   }

//   products = 1;

//   for (let i = len - 1; i >= 0; i -= 1) {
//     const cur = array[i];

//     rightArr[i] = products;
//     products *= cur;
//   }

//   for (let i = 0; i < len; i += 1) {
//     res[i] = leftArr[i] * rightArr[i];
//   }

//   return res;
// }

function arrayOfProducts(arr) {
  const ans = [];

  for (let i = 0; i < arr.length; i += 1) {
    let products = 1;
    const left = i - 1;
    const right = i + 1;

    for (let j = left; j >= 0; j -= 1) {
      products *= arr[j];
    }

    for (let k = right; k <= arr.length - 1; k += 1) {
      products *= arr[k];
    }

    ans.push(products);
  }

  return ans;
}

console.log(arrayOfProducts(array));
