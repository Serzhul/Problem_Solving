function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i += 1) {
        if (!stack.length) {
            stack.push(s[i]);
        } else {
            const prev = stack.pop();
            const cur = s[i];
            if (prev !== cur) {
                stack.push(prev);
                stack.push(cur);
            }
        }
    }
    return stack.length >= 1 ? 0 : 1;
}

solution('baabaa');
