function solution(n) {
    let target = Number.MAX_SAFE_INTEGER;
    for (let i = n; i >= 0; i -= 1) {
        if (n % i === 1) {
            if (target > i) target = i;
        }
    }

    return target;
}

solution(12);
