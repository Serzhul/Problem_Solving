function solution(arr) {
    const GCD = (a, b) => (b ? GCD(b, a % b) : a);

    const LCM = (a, b) => (a * b) / GCD(a, b);

    let curLCM = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        curLCM = LCM(curLCM, arr[i]);
    }

    return curLCM;
}

solution([1, 2, 3]);
