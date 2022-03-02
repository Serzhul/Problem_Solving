function solution(n) {
    const ternary = n.toString(3);

    return parseInt([...ternary].reverse().join(''), 3);
}
solution(45);
