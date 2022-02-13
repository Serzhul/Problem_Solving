const solution = (input) => {
    const [N, K] = input.toString().trim().split(' ');

    let cnt = 0;
    let num = 1;

    let ans = 0;

    while (cnt < K && num <= N) {
        if (N % num === 0) {
            cnt += 1;
            ans = num;
        }
        num += 1;
    }

    cnt < K ? console.log(0) : console.log(ans);
};

solution(`2735 1`);
