function solution(a, b) {
    return a.reduce((acc, aVal, i) => acc + aVal * b[i], 0);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
