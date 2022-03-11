function solution(num) {
    let count = 0;

    const collatz = (n) => {
        if (n % 2 === 0) {
            if (n === 1) return;
            collatz(n / 2);
        }

        if (n % 2 === 1) {
            if (n === 1) return;
            collatz(n * 3 + 1);
        }
        count += 1;
    };
    collatz(num);

    return count <= 500 ? count : -1;
}

solution(6);
