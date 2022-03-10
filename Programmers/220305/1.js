function solution(purchase) {
    const purchaseMap = purchase.map((el) => {
        const [date, spense] = el.split(' ');

        return [date, spense];
    });

    const dateMap = new Map();

    for (let i = 0; i < 365; i += 1) {
        dateMap.set(i, 0);
    }

    const purchaseDates = [];

    purchaseMap.forEach((data) => {
        const [date, spense] = data;

        const dateToNum = new Date(date) - new Date('2019/01/01');
        dateMap.set(dateToNum / 86400000, Number(spense));
        purchaseDates.push(dateToNum / 86400000);
    });

    let total = 0;

    const answer = {
        bronze: 0,
        silver: 0,
        gold: 0,
        platinum: 0,
        diamond: 0,
    };

    for (let i = 0; i < 365; i += 1) {
        if (dateMap.get(i) !== 0) total += dateMap.get(i);
        if (total >= 0 && total < 10000) {
            answer.bronze += 1;
        } else if (total >= 10000 && total < 20000) {
            answer.silver += 1;
        } else if (total >= 20000 && total < 50000) {
            answer.gold += 1;
        } else if (total >= 50000 && total < 100000) {
            answer.platinum += 1;
        } else if (total >= 100000) {
            answer.diamond += 1;
        }

        for (let j = 0; j < purchaseDates.length; j += 1) {
            if (i === purchaseDates[j] + 29)
                total -= dateMap.get(purchaseDates[j]);
        }
    }

    return Object.values(answer);
}

solution([
    '2019/01/30 5000',
    '2019/04/05 10000',
    '2019/06/10 20000',
    '2019/08/15 50000',
    '2019/12/01 100000',
]);
