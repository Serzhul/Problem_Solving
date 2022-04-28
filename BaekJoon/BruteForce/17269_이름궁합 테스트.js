const solution = (input) => {
    let [[N, M], [A, B]] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) =>
            i === 0 ? el.split(' ').map((num) => Number(num)) : el.split(' ')
        );

    const charMap = {
        A: 3,
        B: 2,
        C: 1,
        D: 2,
        E: 4,
        F: 3,
        G: 1,
        H: 3,
        I: 1,
        J: 1,
        K: 3,
        L: 1,
        M: 3,
        N: 2,
        O: 1,
        P: 2,
        Q: 2,
        R: 2,
        S: 1,
        T: 2,
        U: 1,
        V: 1,
        W: 1,
        X: 2,
        Y: 2,
        Z: 1,
    };

    let AB = '';

    const minLen = Math.min(N, M);

    for (let i = 0; i < minLen; i += 1) {
        AB += A[i] + B[i];
    }

    AB += A.slice(minLen) ? A.slice(minLen) : B.slice(minLen);

    const charArr = [...AB].map((char) => charMap[char]);

    for (let i = 0; i < N + M - 2; i += 1) {
        for (let j = 0; j < N + M - 1 - i; j += 1) {
            charArr[j] += charArr[j + 1];
            if (charArr[j] >= 10) charArr[j] -= 10;
        }
    }
    console.log(`${charArr[0] !== 0 ? charArr[0] : ''}${charArr[1]}%`);
};
solution(`3 2
BOJ IN`);
