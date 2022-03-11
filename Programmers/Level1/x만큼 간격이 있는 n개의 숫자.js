function solution(x, n) {
    return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

solution(2, 5);
