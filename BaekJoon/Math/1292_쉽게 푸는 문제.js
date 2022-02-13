const solution = (input) => {
    const [A, B] = input
        .toString()
        .trim()
        .split(' ')
        .map((el) => +el);

    const sequences = Array(1000001);

    sequences[0] = 0;
    sequences[1] = 1;

    let idx = 2;

    for (let i = 2; i + idx <= 2000; i += 1) {
        for (let j = 0; j < idx; j++) {
            sequences[idx + j] = i;
        }
        idx += i;
    }

    let res = 0;

    for (let i = A; i <= B; i++) {
        res += sequences[i];
    }

    console.log(sequences);

    console.log(res);
};

solution(`3 7`);
