var maxScore = function (cardPoints, k) {
    const len = cardPoints.length;
    let sum = 0;
    let max = 0;

    if (len === k) {
        for (let point of cardPoints) {
            sum += point;
        }
        return sum;
    }

    for (let i = 0; i < k; i++) {
        sum += cardPoints[i];
    }

    let curDiff = 1;
    max = sum;

    while (curDiff <= k) {
        sum = sum - cardPoints[k - curDiff] + cardPoints[len - curDiff];
        max = Math.max(sum, max);

        curDiff++;
    }

    console.log(max);

    return max;
};

maxScore([96, 90, 41, 82, 39, 74, 64, 50, 30], 8);
