function solution(n, days = 1) {
    if (n < 1) return days;

    let cur = n - 1;

    let subWhenEven = 0;
    let subWhenOdd = 0;
    if (cur % 2 === 0) subWhenEven = cur / 2;
    if (cur % 3 === 0) subWhenOdd = (cur / 3) * 2;

    cur = cur - subWhenEven - subWhenOdd;

    return solution(cur, days + 1);
}

console.log(solution(10));
