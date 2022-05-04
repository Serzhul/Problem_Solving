const solution = (input) => {
    const [T, ...testCases] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => {
            if (i % 2 === 0) {
                return el.split(' ').map((num) => Number(num));
            }
            return Number(el);
        });

    function check(N, candy) {
        for (let i = 0; i < N; i += 1) {
            if (candy[i] % 2 !== 0) candy[i] += 1;
        }

        return new Set(candy).size === 1;
    }

    function teacher(N, candy) {
        const temp = [];

        for (let i = 0; i < N; i += 1) {
            if (candy[i] % 2 !== 0) candy[i] += 1;
            else candy[i] /= 2;

            temp[(i + 1) % N] = candy[i];
        }

        for (let j = 0; j < N; j += 1) {
            candy[j] += temp[j];
        }

        return candy;
    }

    for (let i = 1; i < testCases.length; i += 2) {
        let candy = testCases[i];

        let count = 0;

        while (!check(candy.length, candy)) {
            count += 1;
            candy = teacher(candy.length, candy);
        }

        console.log(count);
    }
};

solution(`4
5
2 4 7 8 9
1
9
6
10 5 13 2 7 8
4
3 4 4 3`);
