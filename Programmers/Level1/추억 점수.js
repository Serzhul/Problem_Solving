const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

function solution(name, yearning, photo) {
  const map = {};

  for (let i = 0; i < name.length; i += 1) {
    map[name[i]] = yearning[i];
  }

  const ans = [];

  for (let i = 0; i < photo.length; i += 1) {
    const cur = photo[i];
    let sum = 0;

    cur.forEach((el) => {
      if (el in map) sum += map[el];
    });

    ans.push(sum);
  }

  return ans;
}

console.log(solution(name, yearning, photo));
