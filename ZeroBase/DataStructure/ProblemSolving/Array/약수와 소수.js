// 입력된 숫자 N의 약수와 N까지의 소수를 배열에 저장하고 출력
// 약수 : 어떤 수의 나머지가 0이 되도록 나눌 수 있는 수
// 소수 : 1과 자기 자신 외에는 약수를 가지지 않는 수

const N = 30;

// ***** 약수 구하기 *****
// Sol1 : 직접 구현
const getDivisor = (num) => {
  const divisorArr = [];

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      divisorArr.push(i);
    }
  }

  return divisorArr;
};

console.log(getDivisor(N));

// Sol2 : 강의 소개 방법

let divisor = Array.from({ length: N }, (elem, idx) => idx + 1);

divisor = divisor.filter((elem) => N % elem === 0);

console.log(divisor);

// ***** 소수 구하기 *****

// Sol1 : 직접 구현
const getPrimeNum = (num) => {
  const primeNumArr = [];

  for (let i = 2; i <= num; i += 1) {
    for (let j = 2; j <= i; j += 1) {
      if (i !== j && i % j === 0) break;

      if (i % j === 0) primeNumArr.push(j);
    }
  }

  return primeNumArr;
};

console.log(getPrimeNum(N));

// Sol2 : 강의 소개
let decimal = Array.from({ length: N }, (el, idx) => idx + 1);

decimal = decimal
  .filter((el) => {
    for (let i = 2; i < el; i += 1) {
      if (el % i === 0) return false;
    }

    return true;
  })
  .filter((num) => num !== 1);

console.log(decimal);

// Sol3 : 소수인지 판별하는 함수

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

console.log(isPrime());
