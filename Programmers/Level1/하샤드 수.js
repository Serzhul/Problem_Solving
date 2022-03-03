function solution(x) {
    const getSumofDigits = (num) => {
        let sum = 0;
        for (let i = 0; i < num.length; i += 1) {
            sum += +num[i];
        }
        return sum;
    };

    return x % getSumofDigits(String(x)) === 0;
}

solution(10);
