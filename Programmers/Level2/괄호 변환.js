const isCorrect = (str) => {
    const stack = [];

    for (let i = 0; i < str.length; i += 1) {
        if (!stack.length) stack.push(str[i]);
        else {
            const prev = stack.pop();
            const cur = str[i];
            if (prev !== '(' || cur !== ')') {
                stack.push(prev);
                stack.push(cur);
            }
        }
    }
    return stack.length === 0;
};
const isBalanced = (str) => {
    let leftNum = 0;
    let rightNum = 0;
    let u = '';
    let v = '';
    let temp = '';

    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === '(') {
            temp += '(';
            leftNum += 1;
        } else {
            temp += ')';
            rightNum += 1;
        }

        if (leftNum === rightNum) {
            if (u === '') {
                u = temp;
                v = str.slice(i + 1);
                break;
            }
        }
    }
    return [u, v];
};

const reverseP = (str) =>
    [...str].map((el) => (el === '(' ? ')' : '(')).join('');

const getResult = (str) => {
    if (str === '') return '';
    const [u, v] = isBalanced(str);
    if (isCorrect(u)) {
        return u + getResult(v);
    }
    let temp = '(';
    temp += getResult(v);
    temp += ')';
    temp += reverseP(u.slice(1, u.length - 1));
    return temp;
};

function solution(p) {
    return getResult(p);
}
console.log(solution('()))((()'));
