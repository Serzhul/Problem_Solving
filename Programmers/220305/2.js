function solution(h, w, n, board) {
    const newBoard = board.map((el) => el.split(''));

    let total = 0;

    const findRight = (x, y) => {
        if (y + n < w) {
            if (newBoard[x][y + n] === '1') return;
        }

        if (y - 1 >= 0) {
            if (newBoard[x][y - 1] === '1') return;
        }

        const xD = Array.from({ length: n }, () => 0);
        const yD = Array.from({ length: n }, (_, i) => i);

        let count = 0;

        for (let i = 0; i < n; i += 1) {
            const newX = x + xD[i];
            const newY = y + yD[i];

            if (newX < 0 || newX >= h || newY < 0 || newY >= w) return;

            if (newBoard[newX][newY] === '1') count += 1;
        }

        if (count === n) total += 1;
    };

    const findRightDown = (x, y) => {
        if (x + n < h && y + n < w) {
            if (newBoard[x + n][y + n] === '1') return;
        }
        if (x - 1 >= 0 && y - 1 >= 0) {
            if (newBoard[x - 1][y - 1] === '1') return;
        }

        const xD = Array.from({ length: n }, (_, i) => i);
        const yD = Array.from({ length: n }, (_, i) => i);

        let count = 0;

        for (let i = 0; i < n; i += 1) {
            const newX = x + xD[i];
            const newY = y + yD[i];

            if (newX < 0 || newX >= h || newY < 0 || newY >= w) return;

            if (newBoard[newX][newY] === '1') count += 1;
        }

        if (count === n) total += 1;
    };

    const findRightUp = (x, y) => {
        // console.log(x + n, y + n);
        if (x - n >= 0 && y + n < w) {
            if (newBoard[x - n][y + n] === '1') return;
        }

        if (x + 1 < h && y - 1 >= 0) {
            if (newBoard[x + 1][y - 1] === '1') return;
        }

        const xD = Array.from({ length: n }, (_, i) => -i);
        const yD = Array.from({ length: n }, (_, i) => i);

        let count = 0;

        for (let i = 0; i < n; i += 1) {
            const newX = x + xD[i];
            const newY = y + yD[i];

            if (newX < 0 || newX >= h || newY < 0 || newY >= w) return;

            if (newBoard[newX][newY] === '1') count += 1;
        }

        if (count === n) total += 1;
    };

    const findDown = (x, y) => {
        if (x + n < h) {
            if (newBoard[x + n][y] === '1') return;
        }
        if (x - 1 >= 0) {
            if (newBoard[x - 1][y] === '1') return;
        }

        const xD = Array.from({ length: n }, (_, i) => i);
        const yD = Array.from({ length: n }, () => 0);

        let count = 0;

        for (let i = 0; i < n; i += 1) {
            const newX = x + xD[i];
            const newY = y + yD[i];

            if (newX < 0 || newX >= h || newY < 0 || newY >= w) return;

            if (newBoard[newX][newY] === '1') count += 1;
        }

        if (count === n) total += 1;
    };

    for (let i = 0; i < h; i += 1) {
        for (let j = 0; j < w; j += 1) {
            findRight(i, j);
            findRightUp(i, j);
            findRightDown(i, j);
            findDown(i, j);
        }
    }

    return total;
}

solution(7, 9, 4, [
    '111100000',
    '000010011',
    '111100011',
    '111110011',
    '111100011',
    '111100010',
    '111100000',
]);
