function solution(n) {
    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1));

    let count = 1;
    let x = -1;
    let y = 0;

    let target = n;

    while (target > 0) {
        for (let i = 0; i < target; i += 1) {
            x += 1;
            triangle[x][y] = count;
            count += 1;
        }
        for (let i = 0; i < target - 1; i += 1) {
            y += 1;
            triangle[x][y] = count;
            count += 1;
        }
        for (let i = 0; i < target - 2; i += 1) {
            x -= 1;
            y -= 1;
            triangle[x][y] = count;
            count += 1;
        }

        target -= 3;
    }

    return triangle.flat();
}

solution(4);
