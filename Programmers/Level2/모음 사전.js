function solution(word) {
    const dict = {
        A: 0,
        E: 1,
        I: 2,
        O: 3,
        U: 4,
    };

    const plus = [781, 156, 31, 6, 1]; // 각 자리수별 변화시키는데 필요한 가지수 가령 1번째 자리를 다음 문자로 가져가려면 781개를 추가로 더해줘야 한다.

    return word
        .split('')
        .reduce((acc, ch, i) => acc + dict[ch] * plus[i] + 1, 0);
}

solution('AAAAE');
