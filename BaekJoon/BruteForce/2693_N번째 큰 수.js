const solution = (input) => {
    const [testNum, ...T] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((num) => +num)));

    let res = '';

    for (const testCase of T) {
        testCase.sort((a, b) => a - b);

        res += `${testCase[7]}\n`;
    }

    console.log(res);
};

solution(`4
1 2 3 4 5 6 7 8 9 1000
338 304 619 95 343 496 489 116 98 127
931 240 986 894 826 640 965 833 136 138
940 955 364 188 133 254 501 122 768 408`);
