function solution(s) {
    let answer = 0;

    const checkisCorrect = (str) => {
        const stack = [];
        [...str].forEach((char) => {
            if (stack.length === 0) stack.push(char);
            else {
                const last = stack[stack.length - 1];
                if (
                    (last === '[' && char === ']') ||
                    (last === '(' && char === ')') ||
                    (last === '{' && char === '}')
                ) {
                    stack.pop();
                } else {
                    stack.push(char);
                }
            }
        });

        return stack.length === 0;
    };

    const rotate = (arr, num) => {
        for (let i = 0; i <= num; i += 1) {
            arr.push(arr.shift());
        }

        return arr;
    };

    for (let i = 1; i <= s.length; i += 1) {
        if (checkisCorrect(rotate([...s], i))) answer += 1;
    }

    return answer;
}

solution('}}}');
