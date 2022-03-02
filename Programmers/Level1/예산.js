function solution(d, budget) {
    d.sort((a, b) => a - b);

    let sum = 0;
    let count = 0;

    if (d.length === 1 && d[0] <= budget) return 1;

    for (let i = 0; i < d.length; i += 1) {
        if (sum >= budget) return count;

        sum += d[i];
        if (sum > budget) return count;
        count += 1;
    }

    return count;
}
solution([2, 2, 3, 3], 10);
