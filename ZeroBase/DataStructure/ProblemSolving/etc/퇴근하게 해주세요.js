// 회사 출입에 대한 정보 N개가 있을 때, 현재 회사에 남아 있는 사람의 이름을 역순으로 출력

function hash(data) {
  let ret = 0;

  const len = data.length;

  console.log(len, "len");
  for (let i = 0; i < len; i += 1) {
    ret = (ret + (data.charCodeAt(i) * 19 + 3)) % 10;
  }

  return ret;
}

const N = 7;
const arr = [
  ["brad", "enter"],
  ["john", "enter"],
  ["bob", "enter"],
  ["brad", "leave"],
  ["alice", "enter"],
  ["lisa", "enter"],
  ["drake", "enter"],
];

const companyMap = {};
const nameMap = {};

arr.forEach((el) => {
  const h = hash(el[0]);

  nameMap[h] = el[0];

  if (el[1] === "enter") {
    companyMap[h] = 1;
  } else if (el[1] === "leave") {
    companyMap[h] = 0;
  }
});

console.log(nameMap);
console.log(companyMap);

const companyMapArr = Object.entries(companyMap)
  .filter((el) => el[1] !== 0)
  .map((el) => nameMap[el[0]])
  .sort()
  .reverse();

console.log(companyMapArr);
