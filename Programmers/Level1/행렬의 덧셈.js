function solution(arr1, arr2) {
    return arr1.map((el, i) => el.map((num, j) => num + arr2[i][j]));
}

solution(
    [
        [1, 2],
        [2, 3],
    ],
    [
        [3, 4],
        [5, 6],
    ]
);
