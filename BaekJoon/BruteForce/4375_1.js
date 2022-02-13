const solution = (input) => {
    const [...tc] = input
        .toString()
        .trim()
        .split('\n')
        .map((num) => +num);

    let res = '';

    for (let i = 0; i < tc.length; i++) {
        let target = '1'.repeat((tc[i] + '').length + 1);
        while (+target % tc[i]) {
            target += '1';
        }

        res += target.length + (i === tc.length - 1 ? '' : '\n');
    }

    console.log(res);
};
solution(`3
7
9901`);
