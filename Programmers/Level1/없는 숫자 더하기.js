function solution(numbers) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return arr
        .filter((number) => !numbers.includes(number))
        .reduce((acc, cur) => {
            acc += cur;
            return acc;
        }, 0);
}
solution([1, 2, 3, 4, 6, 7, 8, 0]);
