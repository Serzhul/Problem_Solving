function solution(board, moves) {
    const stack = [];
    let count = 0;

    const reverseBoard = () => {
        const newBoard = Array.from({ length: board.length }, () =>
            Array(board.length)
        );

        for (let i = 0; i < board.length; i += 1) {
            for (let j = 0; j < board[i].length; j += 1) {
                newBoard[j][i] = board[i][j];
            }
        }

        return newBoard;
    };

    const newBoard = reverseBoard();

    for (let i = 0; i < moves.length; i += 1) {
        let idx = -1;

        const pickDoll = newBoard[moves[i] - 1].find((doll, index) => {
            if (doll !== 0) {
                idx = index;
                return doll;
            }
            return null;
        });

        if (!pickDoll) {
            if (stack.length === 0) {
                stack.push(pickDoll);
                newBoard[moves[i] - 1][idx] = 0;
            } else {
                const curDoll = stack.pop();
                if (curDoll === pickDoll) {
                    count += 2;
                } else {
                    stack.push(curDoll);
                    stack.push(pickDoll);
                }
                newBoard[moves[i] - 1][idx] = 0;
            }
        }
    }

    return count;
}

solution(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
);
