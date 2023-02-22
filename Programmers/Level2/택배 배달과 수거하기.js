const cap = 4;
const n = 5;
const deliveries = [1, 0, 3, 1, 2];
const pickups = [0, 3, 0, 4, 0];

function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  const reverseDeliveries = deliveries.reverse();
  const reversePickups = pickups.reverse();

  let haveToDeli = 0;
  let haveToPick = 0;

  for (let i = 0; i < n; i += 1) {
    haveToDeli += reverseDeliveries[i];
    haveToPick += reversePickups[i];

    while (haveToDeli > 0 || haveToPick > 0) {
      haveToDeli -= cap;
      haveToPick -= cap;
      answer += (n - i) * 2;
    }
  }

  return answer;
}

console.log(solution(cap, n, deliveries, pickups));
