const countSubstrings = (s) => {
    const countPalindrome = (str, i, j) => {
        let left = i;
        let right = j;

        let count = 0;

        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left -= 1;
            right += 1;
            count += 1;
        }

        return count;
    };

    let answer = 0;

    for (let i = 0; i < s.length; i += 1) {
        const count1 = countPalindrome(s, i, i);
        const count2 = countPalindrome(s, i, i + 1);

        answer += count1 + count2;
    }

    return answer;
};

countSubstrings('abc');
