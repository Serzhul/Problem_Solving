const solution = (s) => {
    let [[n], target, ...m] = s
        .toString()
        .trim()
        .split('\n')
        .map((el) => el.split(' ').map((sel) => +sel));

    let [A, B] = target;

    const parent = {};

    for (let i = 0; i < m.length; i++) {
        const [x, y] = m[i];
        if (y) parent[y] = x;
    }

    console.log(parent);

    const Aa = [];
    const Ba = [];

    let Ad = 0;
    let Bd = 0;

    while (parent[A] > 0) {
        Aa.push([A, Ad]);
        Ad += 1;
        A = parent[A];
    }

    console.log(parent);

    while (parent[B] > 0) {
        Ba.push([B, Bd]);
        Bd += 1;
        B = parent[B];
    }
    console.log(Aa, Ba);

    for (let i of Aa) {
        for (let j of Ba) {
            if (i[0] === j[0]) {
                console.log(i[1], j[1]);
                return;
            }
        }
    }

    console.log(-1);
};

solution(`9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`);
