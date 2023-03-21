const solution = (input) => {
  const [T, ...cases] = input.toString().trim().split("\n").map(Number);

  let ans = "";

  function fibonacci(num, count, dp) {
    if (num <= 1) {
      count[num] += 1;
      return 1;
    }

    if (dp[num] !== 0) {
      count[0] += dp[num - 2];
      count[1] += dp[num - 1];
      return dp[num];
    }

    dp[num] = fibonacci(num - 1, count, dp) + fibonacci(num - 2, count, dp);

    return dp[num];
  }

  cases.forEach((test) => {
    const dp = new Array(test + 1).fill(0);

    const count = [0, 0];

    dp[0] = 1;
    dp[1] = 1;

    fibonacci(test, count, dp);

    ans += `${count.join(" ")}\n`;
  });

  console.log(ans);
};

solution(`2
6
40`);
