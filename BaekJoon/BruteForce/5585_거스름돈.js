const solution = (n) => {
    // let n = require('fs').readFileSync('/dev/stdin').toString().trim();
    let coin = [500, 100, 50, 10, 5, 1];
    let answer = 0;

    n = 1000 - n;

    for (let i = 0; i < coin.length; i++) {
        while (n >= coin[i]) {
            n -= coin[i];
            answer++;
        }
    }

    console.log(answer);
    return answer;
};

solution(1);
