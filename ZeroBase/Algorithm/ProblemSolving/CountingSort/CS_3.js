// N명의 반장 후보자, M명의 사람이 반장 투표를 참여했을 때 과반수가 넘는 사람 찾기

// const [N, M] = [3, 16];

// const arr = [3, 1, 2, 2, 1, 1, 1, 1, 2, 1, 3, 2, 1, 1, 1, 1, 2];

const [N, M] = [6, 11];
const arr = [6, 6, 6, 6, 6, 5, 4, 3, 2, 1, 1];

const maxVal = Math.max(...arr);

const countArr = Array.from({ length: maxVal + 1 }, () => 0);

arr.forEach((el) => {
  countArr[el] += 1;
});

let isSelected = false;

for (let i = 0; i < countArr.length; i += 1) {
  if (countArr[i] >= M / 2) {
    isSelected = true;
    console.log(i);
    break;
  }
}

if (!isSelected) console.log(-1);
