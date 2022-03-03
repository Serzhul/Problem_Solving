function solution(n) {
    const numStr = '' + n;

    let sum = 0;

    [...numStr].forEach((str) => (sum += +str));

    console.log(sum);
}

solution(123);
