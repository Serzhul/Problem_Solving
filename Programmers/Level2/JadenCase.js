function solution(s) {
    // JadenCase : 모둔 단어의 첫 문자가 대문자, 이외는 소문자

    const strArr = s.split(' ');

    return strArr
        .map((word) =>
            [...word]
                .map((char, i) => {
                    if (i === 0) return char.toUpperCase();
                    return char.toLowerCase();
                })
                .join('')
        )
        .join(' ');
}

solution('3people unFollowed me');
