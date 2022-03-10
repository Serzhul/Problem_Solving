function solution(s, n) {
    const sArr = s.split('');

    return sArr
        .map((char, i) => {
            if (char === ' ') return ' ';
            const charCode = s.charCodeAt(i);
            if (charCode <= 90) {
                if (charCode + n > 90)
                    return String.fromCharCode(charCode + n - 26);
            }
            if (charCode >= 97 && charCode <= 122) {
                if (charCode + n > 122)
                    return String.fromCharCode(charCode + n - 26);
            }
            return String.fromCharCode(charCode + n);
        })
        .join('');
}

solution('a B z', 1);
