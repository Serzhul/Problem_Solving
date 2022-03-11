function solution(n) {
    return Number(
        String(n)
            .split('')
            .map((num) => Number(num))
            .sort((a, b) => b - a)
            .join('')
    );
}
solution(118372);
