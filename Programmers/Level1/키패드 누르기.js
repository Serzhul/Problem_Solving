function solution(numbers, hand) {
    let leftCur = 10;
    let rightCur = 12;

    const leftNum = [1, 4, 7];
    const rightNum = [3, 6, 9];

    const answer = [];

    const pushLeft = (btn) => {
        answer.push('L');
        leftCur = btn;
    };

    const pushRight = (btn) => {
        answer.push('R');
        rightCur = btn;
    };

    for (let i = 0; i < numbers.length; i += 1) {
        let cur = numbers[i];

        if (cur === 0) cur = 11;

        if (leftNum.includes(cur)) {
            pushLeft(cur);
        } else if (rightNum.includes(cur)) {
            pushRight(cur);
        } else {
            const leftDist = Math.abs(leftCur - cur);
            const rightDist = Math.abs(rightCur - cur);
            const leftDiff = (leftDist % 3) + Math.floor(leftDist / 3);
            const rightDiff = (rightDist % 3) + Math.floor(rightDist / 3);

            if (leftDiff < rightDiff) {
                pushLeft(cur);
            } else if (rightDiff < leftDiff) {
                pushRight(cur);
            } else if (hand === 'right') {
                pushRight(cur);
            } else {
                pushLeft(cur);
            }
        }
    }

    return answer.join('');
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
