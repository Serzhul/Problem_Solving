// 백준 1463

function solution(n) {
    var answer = 1;

    const queue = [];
    const nMap = new Map();

    nMap.set(n, 1);

    queue.push(n);

    while (queue.length) {
        const len = queue.length;

        for (let i = 0; i < len; i++) {
            const target = queue.shift();
            if (target === 1) return answer;
            if (!nMap.has(target - 1)) {
                nMap.set(target - 1, 1);
                queue.push(target - 1);
            }
            if (target % 2 === 0 && !nMap.has(target / 2)) {
                nMap.set(target / 2, 1);
                queue.push(target / 2);
            }
            if (target % 3 === 0 && !nMap.has(target / 3)) {
                nMap.set(target / 3, 1);
                queue.push(target / 3);
            }
        }
        answer++;
    }

    return answer;
}

console.log(solution(10));
