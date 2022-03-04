function solution(numbers) {
    const isPrime = (num) => {
        if (num === 0 || num === 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i += 1) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const numArr = numbers.split('');

    const checked = Array.from({ length: numArr.length }, () => false);

    const answer = new Set();

    const dfs = (cnt, sum) => {
        if (cnt === numArr.length) {
            // console.log(sum);
            if (isPrime(Number(sum))) answer.add(Number(sum));
        }
        for (let i = 0; i < numArr.length; i += 1) {
            if (!checked[i]) {
                checked[i] = true;
                dfs(cnt + 1, sum + numArr[i]);
                checked[i] = false;
            }
        }
    };

    for (let i = 0; i <= numArr.length; i += 1) {
        dfs(i, 0);
    }

    return answer.size;
}

solution('011');
