const solution = (s) => {
    const [N, K] = s
        .toString()
        .trim()
        .split(' ')
        .map((el) => +el);

    const queue = Array.from({ length: N }, (_, i) => i + 1);

    const answer = [];

    while (queue.length) {
        for (let i = 1; i < K; i++) {
            queue.push(queue.shift());
        }
        answer.push(queue.shift());
    }
    console.log(`<${answer.join(', ')}>`);
};

solution('7 3');
