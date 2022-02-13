const solution = (input) => {
    const dwarves = input
        .toString()
        .trim()
        .split('\n')
        .map((el) => +el);

    const sum = dwarves.reduce((acc, height) => acc + height, 0);

    for (let i = 0; i < dwarves.length; i += 1) {
        for (let j = i + 1; j < dwarves.length; j += 1) {
            if (sum - (dwarves[i] + dwarves[j]) === 100) {
                console.log(
                    dwarves
                        .filter((_, idx) => idx !== i && idx !== j)
                        .sort((a, b) => a - b)
                        .join('\n')
                );
            }
        }
    }
};

solution(`20
7
23
19
10
15
25
8
13`);
