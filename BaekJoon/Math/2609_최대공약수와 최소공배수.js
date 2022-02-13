const solution = (input) => {
    const [N1, N2] = input
        .toString()
        .trim()
        .split(' ')
        .map((el) => +el);

    const GCD = (a, b) => (b ? GCD(b, a % b) : a);
    const LCM = (a, b) => (a * b) / GCD(a, b);

    console.log(GCD(N1, N2), LCM(N1, N2));
};

solution(`24 18`);
