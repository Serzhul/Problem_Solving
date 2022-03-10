function solution(grid) {
    let count = 0;

    const newGrid = Array.from(grid);

    const original = [
        [1, 1, 2, 2],
        [1, 1, 2, 2],
        [2, 2, 1, 1],
        [2, 2, 1, 1],
    ];
    const rotateLeft = (x, y) => {
        const temp = grid[x][y];
        newGrid[x][y] = newGrid[x][y + 1];
        newGrid[x][y + 1] = newGrid[x][y + 2];
        newGrid[x][y + 2] = newGrid[x][y + 3];
        newGrid[x][y + 3] = temp;
    };

    const rotateRight = (x, y) => {
        const temp = newGrid[x][y];
        newGrid[x][y] = newGrid[x][y - 1];
        newGrid[x][y - 1] = newGrid[x][y - 2];
        newGrid[x][y - 2] = newGrid[x][y - 3];
        newGrid[x][y - 3] = temp;
    };

    const rotateDown = (x, y) => {
        const temp = newGrid[x][y];
        newGrid[x][y] = newGrid[x - 1][y];
        newGrid[x - 1][y] = newGrid[x - 2][y];
        newGrid[x - 2][y] = newGrid[x - 3][y];
        newGrid[x - 3][y] = temp;
    };

    const rotateUp = (x, y) => {
        const temp = newGrid[x][y];
        newGrid[x][y] = newGrid[x + 1][y];
        newGrid[x + 1][y] = newGrid[x + 2][y];
        newGrid[x + 2][y] = newGrid[x + 3][y];
        newGrid[x + 3][y] = temp;
    };


}

solution([
    [1, 1, 1, 1],
    [2, 1, 2, 2],
    [2, 2, 2, 1],
    [1, 1, 2, 2],
]);
