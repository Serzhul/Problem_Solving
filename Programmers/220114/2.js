function solution(n, relations) {
    const nMap = new Map();

    const basic = [1, 2, 3, 4];

    const ans = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
    };

    for (const relation of relations) {
        const [key, ...values] = relation;
        nMap.get(key) ? nMap.get(key).push(values) : nMap.set(key, [values]);
    }

    const keys = [...nMap.keys()];

    let sum = 0;

    for (let i = 0; i < keys.length; i++) {
        const cur = nMap.get(keys[i]);
        for (let j = 0; j < cur.length; j++) {
            const [part, num] = cur;
            if (basic.includes(part)) {
                ans[part] += num;
            } else {
            }
        }
    }
}
