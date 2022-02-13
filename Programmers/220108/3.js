function solution(w, h, t, s, points) {
    // w: 가로 길이, h: 세로길이, t: 오렌지 나무 개수, s: 선택할 수 있는 정사각형 한변의 길이, point는 오렌지 나무 위치 정보
    let answer = 0;

    const grounds = Array.from({ length: h * w + 1 }, () => 0);

    const nMap = new Map();

    let minX = Number.MAX_SAFE_INTEGER,
        minY = Number.MAX_SAFE_INTEGER,
        maxX = Number.MIN_SAFE_INTEGER,
        maxY = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < t; i++) {
        const [x, y] = points[i];
        // console.log(x, y);
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x + s);
        maxY = Math.max(maxY, y + s);

        console.log(w * x, y);
        grounds[w * y + x] = 1;
    }

    const checkTree = (curPosition) => {
        const [x, y] = curPosition;
        let countTree = 0;

        for (let i = y; i <= y + s; i++) {
            if (i > h) break;
            for (let j = x; j <= x + s; j++) {
                if (j > w) break;
                if (grounds[i][j] === 1) countTree++;
            }
        }
        return countTree;
    };

    for (let i = minY; i <= maxY; i++) {
        for (let j = minX; j <= maxX; j++) {
            answer = Math.max(answer, checkTree([i, j]));
        }
    }

    return answer;
}
solution(10, 9, 8, 3, [
    [3, 4],
    [6, 3],
    [5, 7],
    [6, 6],
    [9, 5],
    [6, 9],
    [7, 8],
    [8, 9],
]);
