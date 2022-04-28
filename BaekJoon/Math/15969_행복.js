const solution = (input) => {
    const [N, nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((input, i) => (!i ? +input : input.split(' ').map((num) => +num)));

    console.log(Math.max(...nums) - Math.min(...nums));
};
solution(`8
85 42 79 95 37 11 72 32`);
