function solution(s) {
    return s
        .split(' ')
        .map((word) => {
            let newWord = '';
            for (let i = 0; i < word.length; i += 1) {
                if (i % 2 !== 0) newWord += word[i].toLowerCase();
                else newWord += word[i].toUpperCase();
            }
            return newWord;
        })
        .join(' ');
}

solution('try hello world');
