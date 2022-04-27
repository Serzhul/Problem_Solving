function BracketCombinations(num) {
    const checkIsValid = (open, close) => {
        if (open === 0 && close === 0) return 1;

        let res = 0;

        if (open > 0) {
            res += checkIsValid(open - 1, close);
        }

        if (close > open) {
            res += checkIsValid(open, close - 1);
        }

        return res;
    };

    return checkIsValid(num, num);
}

console.log(BracketCombinations(3));
