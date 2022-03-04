function solution(brown, yellow) {
    const total = brown + yellow;

    for (let height = 3; height <= brown; height += 1) {
        if (total % height === 0) {
            const width = total / height;

            if ((height - 2) * (width - 2) === yellow) {
                return [width, height];
            }
        }
    }
    return null;
}
solution(24, 24);
