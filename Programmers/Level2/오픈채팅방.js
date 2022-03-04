function solution(record) {
    const answer = [];
    const map = new Map();
    for (let i = 0; i < record.length; i += 1) {
        const [state, uid, name] = record[i].split(' ');
        if (state === 'Leave') {
            answer.push([uid, '님이 나갔습니다.']);
        } else if (state === 'Enter') {
            answer.push([uid, '님이 들어왔습니다.']);
        }
        map.set(uid, name);
    }
    return answer.map((ele) => map.get(ele[0]) + ele[1]);
}

solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid4567',
    'Enter uid1234 Prodo',
    'Change uid4567 Muzi',
    'Change uid1234 ',
]);
