const longestPalindrome = (s) => {
    let longestStr = '';

    const getLongestPalindrome = (str, i, j) => {
        let left = i;
        let right = j;

        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left -= 1;
            right += 1;
        }

        return str.slice(left + 1, right);
    };

    for (let i = 0; i < s.length; i += 1) {
        const cur1 = getLongestPalindrome(s, i, i);
        const cur2 = getLongestPalindrome(s, i, i + 1);

        const longerPalindrome = cur1.length > cur2.length ? cur1 : cur2;

        if (longerPalindrome.length > longestStr.length) {
            longestStr = longerPalindrome;
        }
    }

    return longestStr;
};

longestPalindrome('babad');
