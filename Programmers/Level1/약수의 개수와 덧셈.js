function solution(left, right) {
    const getNumberOfDivisor = (num) => {
        const divisors = [1];
        for (let i = 2; i <= num; i += 1) {
            if (num % i === 0) divisors.push(num);
        }
        return divisors.length;
    };

    let sum = 0;

    for (let i = left; i <= right; i += 1) {
        const numberOfDivisor = getNumberOfDivisor(i);
        if (numberOfDivisor % 2 === 0) sum += i;
        else sum -= i;
    }

    return sum;
}

solution(13, 17);
