const solution = (input) => {
    const [x, y] = input
        .toString()
        .trim()
        .split('\n')
        .map((el) => Number(el));

    if (x > 0 && y > 0) console.log(1);
    else if (x < 0 && y > 0) console.log(2);
    else if (x < 0 && y < 0) console.log(3);
    else console.log(4);
};

solution(`9
-13`);
