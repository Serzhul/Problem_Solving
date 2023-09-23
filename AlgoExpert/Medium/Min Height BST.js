class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  getHeight(tree, height) {
    if (!tree) {
      return height;
    }

    const leftHeight = this.getHeight(tree.left, height + 1);
    const rightHeight = this.getHeight(tree.right, height + 1);

    return Math.max(leftHeight, rightHeight);
  }
}

const input = [1, 2, 5, 7, 10, 13, 14, 15, 22];

// function minHeightBst(array) {
//   const constructMinHeightBst = (array, bst, startIdx, endIdx) => {
//     if (endIdx < startIdx) return bst;

//     const midIdx = Math.floor((startIdx + endIdx) / 2);
//     const valueToAdd = array[midIdx];

//     if (!bst) bst = new BST(valueToAdd);
//     else bst.insert(valueToAdd);

//     constructMinHeightBst(array, bst, startIdx, midIdx - 1);
//     constructMinHeightBst(array, bst, midIdx + 1, endIdx);

//     return bst;
//   };

//   return constructMinHeightBst(array, null, 0, array.length - 1);
// }

// function minHeightBst(array) {
//   const constructMinHeightBst = (array, bst, startIdx, endIdx) => {
//     if (endIdx < startIdx) return bst;

//     const midIdx = Math.floor((startIdx + endIdx) / 2);
//     const valueToAdd = array[midIdx];

//     if (!bst) bst = new BST(valueToAdd);
//     else bst.insert(valueToAdd);

//     constructMinHeightBst(array, bst, startIdx, midIdx - 1);
//     constructMinHeightBst(array, bst, midIdx + 1, endIdx);

//     return bst;
//   };

//   return constructMinHeightBst(array, null, 0, array.length - 1);
// }

// 복습 2023.09.23

function minHeightBst(array) {
  function constructBst(arr, bst, startIdx, endIdx) {
    if (endIdx < startIdx) return bst;

    const midIdx = Math.floor((startIdx + endIdx) / 2);
    const val = arr[midIdx];

    if (!bst) bst = new BST(val);
    else bst.insert(val);

    constructBst(arr, bst, startIdx, midIdx - 1);
    constructBst(arr, bst, midIdx + 1, endIdx);

    return bst;
  }

  return constructBst(arr, null, 0, array.length - 1);
}

console.log(minHeightBst(input));
