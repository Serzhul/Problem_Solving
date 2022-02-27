const solution = (id_list, report, k) => {
    const len = id_list.length;
    const map = new Map();

    for (const id of id_list) {
        map.set(id, 0);
    }

    report = report.map((data) => data.split(' '));

    const reported = Array.from({ length: len }, () => {
        return [];
    });
    const suspended = [];

    for (let i = 0; i < report.length; i += 1) {
        const idx = id_list.indexOf(report[i][0]);
        if (!reported[idx].includes(report[i][1])) {
            reported[idx].push(report[i][1]);
            const suspendNum = map.get(report[i][1]) + 1;
            if (suspendNum >= k) suspended.push(report[i][1]);
            map.set(report[i][1], suspendNum);
        }
    }

    return reported.map((reporter) => {
        return reporter.filter((id) => suspended.includes(id)).length;
    });
};

console.log(
    solution(
        ['muzi', 'frodo', 'apeach', 'neo'],
        ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
        2
    )
);
