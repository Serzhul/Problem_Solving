const isPalindrome = (s) => {
    const matched = s.toLowerCase().match(/[a-zA-Z0-9]/gi);

    return matched === null
        ? true
        : [...matched].join('') === [...matched].reverse().join('');
};

isPalindrome('A man, a plan, a canal: Panama');
