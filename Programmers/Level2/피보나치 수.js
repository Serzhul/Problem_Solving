function solution(n) {
    const sequence = [0, 1];

    for (let i = 2; i <= n; i += 1) {
        sequence[i] = (sequence[i - 2] % 1234567) + (sequence[i - 1] % 1234567);
    }

    return sequence[n] % 1234567;
}
solution(3);
