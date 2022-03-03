function solution(n, m) {
    const GCD = (a, b) => (b ? GCD(b, a % b) : a);
    const LCM = (a, b) => (a * b) / GCD(a, b);

    return [GCD(n, m), LCM(n, m)];
}

solution(2, 5);
