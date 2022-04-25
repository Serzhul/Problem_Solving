// Solution 1 : Reverse 메서드 사용

// const isPalindrome = (s) => {
//     const matched = s.toLowerCase().match(/[a-zA-Z0-9]/gi);

//     return matched === null
//         ? true
//         : [...matched].join('') === [...matched].reverse().join('');
// };

// Solution 2: 투 포인터

const isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

    for (let i = 0, j = s.length - 1; i <= j; i += 1, j -= 1) {
        if (s.charAt(i) !== s.charAt(j)) return false;
    }

    return true;
};

isPalindrome('A man, a plan, a canal: Panama');
