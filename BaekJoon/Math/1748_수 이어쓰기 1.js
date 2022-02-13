const solution = (s) => {
    const input = s.toString().trim();
    let sum = 0;
    const len = input.length;

    for (let i = 1; i < len; i++) {
        sum += i * (10 ** i - 10 ** (i - 1));
    }

    sum += len * (input - 10 ** (len - 1) + 1);

    console.log(sum);
};

solution(15);

// test('TC1', () => {
//     expect(solution(`5`)).toStrictEqual(`5`);
// });

// test('TC2', () => {
//     expect(solution(`15`)).toStrictEqual(`21`);
// });

// test('TC3', () => {
//     expect(solution(`120`)).toStrictEqual(`252`);
// });
