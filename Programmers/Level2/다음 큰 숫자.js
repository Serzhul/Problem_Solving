function solution(n) {
    const countOneNum = (num) => {
        const binary = num.toString(2);

        return [...binary].reduce((acc, binaryNum) => {
            if (+binaryNum === 1) return acc + +binaryNum;
            return acc;
        }, 0);
    };

    let nextNum = n + 1;
    const oneNum = countOneNum(n);

    while (countOneNum(nextNum) !== oneNum) {
        nextNum += 1;
    }
    return nextNum;
}

solution(78);
