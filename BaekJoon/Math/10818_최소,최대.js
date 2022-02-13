const solution = (input) => {
    const [testNum, arr] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((num) => +num)));

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < testNum; i++) {
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
    }

    console.log(min, max);
};

solution(`5
20 10 35 30 7`);
