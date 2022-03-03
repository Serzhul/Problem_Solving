function solution(n, arr1, arr2) {
    const map1 = arr1.map((el) => {
        const res = el.toString(2);
        if (res.length < n) {
            return '0'.repeat(n - res.length) + res;
        }
        return res;
    });
    const map2 = arr2.map((el) => {
        const res = el.toString(2);
        if (res.length < n) {
            return '0'.repeat(n - res.length) + res;
        }
        return res;
    });

    const decodeMap1 = map1.map((point) =>
        point
            .split('')
            .map((str) => (str === '0' ? ' ' : '#'))
            .join('')
    );
    const decodeMap2 = map2.map((point) =>
        point
            .split('')
            .map((str) => (str === '0' ? ' ' : '#'))
            .join('')
    );
    const answer = [];

    for (let i = 0; i < n; i += 1) {
        const temp = [];
        for (let j = 0; j < n; j += 1) {
            if (decodeMap1[i][j] === ' ' && decodeMap2[i][j] === ' ')
                temp.push(' ');
            else temp.push('#');
        }
        answer.push(temp.join(''));
    }

    return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
