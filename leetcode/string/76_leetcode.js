const minWindow = (s, t) => {
    let min = '';
    let left = 0;
    let right = -1;

    const map = {};

    [...t].forEach((char) => {
        map[char] = (map[char] || 0) + 1;
    });

    let count = Object.keys(map).length; // 문자 종류수

    while (right <= s.length) {
        // console.log(left, right, count, min);
        if (count === 0) {
            // 모든 문자를 다 찾았을 경우
            const current = s[left];

            if (map[current] !== null) map[current] += 1;

            if (map[current] > 0) count += 1;

            const temp = s.substring(left, right + 1);

            if (min === '') min = temp;
            else min = min.length < temp.length ? min : temp;

            left += 1;
        } else {
            right += 1;

            const current = s[right];

            if (map[current] !== null) map[current] -= 1; // 만약 현재 right 위치의 문자열이 찾아야 하는 문자열이라면 감소 시킴

            if (map[current] === 0) count -= 1; // 다 찾았으므로  count를 감소
        }
    }

    return min;
};

minWindow('ADOBECODEBANC', 'ABC');
