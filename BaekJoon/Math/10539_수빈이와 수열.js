const solution = (input) => {
    const [N, nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((input, i) => (!i ? +input : input.split(' ').map((num) => +num)));

    let sum = nums[0];

    for (let i = 1; i < nums.length; i += 1) {
        nums[i] = nums[i] * (i + 1) - sum;
        sum += nums[i];
    }

    console.log(nums.join(' '));
};
solution(`5
1 2 2 3 4`);
