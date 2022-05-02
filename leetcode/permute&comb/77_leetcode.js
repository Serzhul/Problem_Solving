const combine = (n, k) => {
  const answer = [];

  let arr = [];

  const getComb = (startIdx) => {
    if (arr.length === k) {
      answer.push([...arr]);

      return;
    }

    for (let i = startIdx; i <= n - (k - arr.length) + 1; i += 1) {
      arr.push(i);
      getComb(i + 1);
      arr.pop();
    }
  };

  getComb(1);

  return answer;
};

combine(4, 2);
