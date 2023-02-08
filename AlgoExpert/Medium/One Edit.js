const stringOne = "hello";
const stringTwo = "hollo";

function oneEdit(stringOne, stringTwo) {
  const [len1, len2] = [stringOne.length, stringTwo.length];

  if (Math.abs(len1 - len2) > 1) return false;

  let madeEdit = false;
  let idxOne = 0;
  let idxTwo = 0;

  while (idxOne < len1 && idxTwo < len2) {
    if (stringOne[idxOne] !== stringTwo[idxTwo]) {
      if (madeEdit) return false;
      madeEdit = true;

      if (len1 > len2) {
        idxOne += 1;
      } else if (len2 > len1) {
        idxTwo += 1;
      } else {
        idxOne += 1;
        idxTwo += 1;
      }
    } else {
      idxOne += 1;
      idxTwo += 1;
    }
  }

  return true;
}

console.log(oneEdit(stringOne, stringTwo));
