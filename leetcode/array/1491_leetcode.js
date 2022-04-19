// 직원들의 봉급 배열이 주어졌을 때, 최대값과 최소값을 제외한 평균 봉급을 반환하라.
// 소수점 5자리까지 구해야한다.

// Solution1 : 정석 구현

// const average = function (salary) {
//   let maxSal = Number.MIN_SAFE_INTEGER;
//   let minSal = Number.MAX_SAFE_INTEGER;
//   let totalSal = 0;

//   salary.forEach((sal) => {
//     if (maxSal < sal) maxSal = sal;
//     if (minSal > sal) minSal = sal;
//     totalSal += sal;
//   });

//   totalSal -= maxSal + minSal;

//   return Math.round(totalSal / (salary.length - 2), 5);
// };

// Solution 2 : 고차 함수 사용(sort, reduce)

const average = function (salary) {
  salary.sort((a, b) => a - b);

  salary.pop();
  salary.shift();

  return salary.reduce((a, b) => a + b) / salary.length;
};

average([4000, 3000, 1000, 2000]);
