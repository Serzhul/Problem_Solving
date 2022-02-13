const solution = (input) => {
    const [testNum, ...T] = input
        .toString()
        .trim()
        .split('\n')
        .map((el) => +el);

    let res = '';

    for (const test of T) {
        const binary = [...test.toString(2)];

        for (let i = binary.length - 1; i >= 0; i--) {
            if (binary[i] === '1') res += `${binary.length - 1 - i} `;
        }

        res += `\n`;
    }

    console.log(res);
};

solution(`3
13
24
36
`);
