const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

// const array = [1, 1, 1, 1, 1, 1];
// const sequence = [1, 1, 1];

function isValidSubsequence(array, sequence) {
  let sequenceIdx = 0;

  for (let i = 0; i < array.length; i += 1) {
    const sequenceNum = sequence[sequenceIdx];
    const cur = array[i];

    if (cur === sequenceNum) {
      sequenceIdx += 1;
    }
  }

  return sequenceIdx === sequence.length;
}

console.log(isValidSubsequence(array, sequence));
