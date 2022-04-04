function solution(A, B) {
    let acc = 0;
    let acc2 = 0;

    A.sort();
    B.sort().reverse();

    for (let i = 0; i < A.length; i += 1) {
        acc += A[i] * B[i];
    }

    A.reverse();
    B.reverse();

    for (let i = 0; i < A.length; i += 1) {
        acc2 += A[i] * B[i];
    }

    return Math.min(acc, acc2);
}

solution([1, 4, 2], [5, 4, 4]);
