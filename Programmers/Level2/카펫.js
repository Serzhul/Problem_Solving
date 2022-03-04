function solution(people, limit) {
    const len = people.length;
    if (len === 1) return 1;
    people.sort((a, b) => a - b);

    let cur = 0;
    let count = 0;

    for (let i = len - 1; i >= 0; i -= 1) {
        if (people[i] + people[cur] <= limit) {
            cur += 1;
            count += 1;
        } else {
            count += 1;
        }
        if (cur >= i) break;
    }
    return count;
}
solution([70, 50, 80, 50], 100);
