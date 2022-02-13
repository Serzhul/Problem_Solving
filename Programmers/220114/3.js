function solution(enter, leave) {
    const len = enter.length;

    const nMap = new Map();

    for (let i = 1; i <= len; i++) {
        nMap.set(i, 0);
    }

    let entIdx = 0;
    let levIdx = 0;

    while (entIdx < len) {
        if (enter[entIdx] !== leave[entIdx]) {
            nMap.set(enter[entIdx], nMap.get(enter[entIdx]) + 1);
            entIdx++;
        } else {
            entIdx++;
            levIdx++;
        }
    }

    console.log(...nMap);
}

solution([1, 3, 2], [1, 2, 3]);
