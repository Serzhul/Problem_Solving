function solution(dirs) {
    const move = { U: [0, 1], L: [-1, 0], D: [0, -1], R: [1, 0] };

    let now = [0, 0];

    const check = new Set();

    for (let i = 0; i < dirs.length; i += 1) {
        const nx = now[0] + move[dirs[i]][0];
        const ny = now[1] + move[dirs[i]][1];

        if (nx >= -5 && nx <= 5 && ny <= 5 && ny >= -5) {
            check.add(`${now[0]}${now[1]}${nx}${ny}`);
            check.add(`${nx}${ny}${now[0]}${now[1]}`);

            now = [nx, ny];
        }
    }

    return check.size / 2;
}

solution('ULURRDLLU');
