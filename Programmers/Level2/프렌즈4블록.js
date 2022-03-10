function solution(m, n, board) {
    const newBoard = board.map((block) => block.split(''));

    let answer = 0;

    let newPoints = [];

    const getPoint = (x, y, char) => {
        const xD = [1, 0, 1];
        const yD = [0, 1, 1];

        let temp = [];

        for (let i = 0; i < xD.length; i += 1) {
            const newX = x + xD[i];
            const newY = y + yD[i];

            if (newX < 0 || newX >= m || newY < 0 || newY > n) break;

            if (newBoard[newX][newY] === char) {
                temp.push([newX, newY]);
            }
            if (temp.length >= 3) {
                temp.unshift([x, y]);
                newPoints.push(temp);
            }
        }

        temp = [];
    };

    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            getPoint(i, j, newBoard[i][j]);
        }
    }

    newPoints = newPoints.flat();

    console.log(newPoints);

    // newPoints.forEach((newPoint) => {
    //     newPoint.forEach;
    //     const [x, y] = newPoint;
    //     newBoard[x][y] = 0;
    // });

    // console.log(newBoard);
    // console.log(newBoard, answer);
}
solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']);
