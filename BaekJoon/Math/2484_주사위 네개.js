const solution = (s) => {
    const input = s.toString().trim().split('\n');
    const len = input[0];
    const people = [];
    let diceVal = [0, 0, 0, 0, 0, 0];
    let max = Number.MIN_SAFE_INTEGER;
    let count = 0;

    const fourSame = (num) => 50000 + num * 5000;
    const threeSame = (num) => 10000 + num * 1000;
    const twoTwo = (num1, num2) => 2000 + num1 * 500 + num2 * 500;
    const twoSame = (num) => 1000 + num * 100;
    const failed = (maxNum) => maxNum * 100;

    for (let i = 1; i <= len; i++) {
        people.push(input[i].split(' ').map((el) => +el));
    }

    for (const person of people) {
        for (const dice of person) {
            diceVal[dice - 1]++;
        }
        const checkDice = Math.max(...diceVal);
        if (checkDice === 4) {
            max = Math.max(max, fourSame(diceVal.indexOf(checkDice) + 1));
        } else if (checkDice === 3) {
            max = Math.max(max, threeSame(diceVal.indexOf(checkDice) + 1));
        } else if (checkDice === 2) {
            let count = 0;
            let idx1 = -1;
            let idx2 = -1;
            for (let i = 0; i < 6; i++) {
                if (diceVal[i] === 2) {
                    if (idx1 < 0) {
                        idx1 = i;
                    } else {
                        idx2 = i;
                    }
                    count++;
                }
            }
            if (count === 2) {
                max = Math.max(max, twoTwo(idx1 + 1, idx2 + 1));
            } else {
                max = Math.max(max, twoSame(idx1 + 1));
            }
        } else {
            let temp = -1;
            for (let j = 5; j >= 0; j--) {
                if (diceVal[j] > 0) {
                    temp = j + 1;
                    break;
                }
            }
            max = Math.max(max, failed(temp));
        }

        diceVal = [0, 0, 0, 0, 0, 0];
    }

    console.log(max);
};

solution(`4
3 3 3 3
3 3 6 3
2 2 6 6
6 2 1 5`);
