function solution(n, k) {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0 && i !== num) {
        return false;
      }
    }

    return true;
  };

  let count = 0;

  n.toString(k)
    .split("0")
    .forEach((num) => {
      if (isPrime(Number(num))) {
        count += 1;
      }
    });

  return count;
}
solution(110011, 10);
