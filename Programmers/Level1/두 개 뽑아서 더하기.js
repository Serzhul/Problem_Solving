function solution(numbers) {
    const answer = [];

    const checked = Array.from({ length: numbers.length }, () => false);

    const dfs = (count, sum) => {
        if (count === 2) {
            answer.push(sum);
            return;
        }

        for (let i = 0; i < numbers.length; i += 1) {
            if (!checked[i]) {
                checked[i] = true;
                dfs(count + 1, sum + numbers[i]);
                checked[i] = false;
            }
        }
    };

    dfs(0, 0);

    return [...new Set(answer)].sort((a, b) => a - b);
}
solution([5, 0, 2, 7]);
