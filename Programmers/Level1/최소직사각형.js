function solution(sizes) {
    let maxWidth1 = 0;
    let maxHeight1 = 0;
    let maxWidth2 = 0;
    let maxHeight2 = 0;

    for (let i = 0; i < sizes.length; i += 1) {
        maxWidth1 = Math.max(sizes[i][0], maxWidth1);
        maxHeight1 = Math.max(sizes[i][1], maxHeight1);
        maxWidth2 = Math.max(sizes[i][1], maxWidth2);
        maxHeight2 = Math.max(sizes[i][0], maxHeight2);
    }

    console.log(maxWidth1, maxWidth2, maxHeight1, maxHeight2);
}
solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
]);
