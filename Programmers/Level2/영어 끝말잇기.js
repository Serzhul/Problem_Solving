function solution(n, words) {
    const used = [];

    let curPlayer = 1;
    let count = 1;

    const isCorrect = (lastWord, currentWord) =>
        lastWord[lastWord.length - 1] === currentWord[0];

    for (let i = 0; i < words.length; i += 1) {
        curPlayer = (i % n) + 1;
        count = Math.floor(i / n) + 1;
        if (used.includes(words[i])) {
            return [curPlayer, count];
        }

        if (used.length && !isCorrect(used[used.length - 1], words[i]))
            return [curPlayer, count];

        used.push(words[i]);
    }

    return [0, 0];
}

solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
]);
