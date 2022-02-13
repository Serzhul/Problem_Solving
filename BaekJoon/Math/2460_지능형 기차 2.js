const solution = (input) => {
    const [...stations] = input
        .toString()
        .trim()
        .split('\n')
        .map((people) => people.split(' ').map((el) => +el));

    let total = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for (const station of stations) {
        const [offPerson, getPerson] = station;
        total -= offPerson;
        total += getPerson;
        max = Math.max(total, max);
    }

    console.log(max);
};

solution(`0 32
3 13
28 25
17 5
21 20
11 0
12 12
4 2
0 8
21 0`);
