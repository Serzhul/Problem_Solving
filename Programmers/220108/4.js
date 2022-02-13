function solution(s, e) {
    var answer = 0;

    // 송아지 이동 경로 => 1, 2, 3, 4, 5 ................
    // 현수 이동 경로 => +1, -1, * 2에서 선택

    const cowDP = [e];
    let hsDP = [s];

    let cowIdx = 1;
    let hsIdx = 1;

    const nMap = new Map();

    nMap.set(s, 1);

    const queue = [];

    while (cowDP[cowDP.length - 1] !== hsDP[hsDP.length - 1]) {
        if (cowDP[cowDP.length - 1] >= 200000) return -1;

        cowDP[cowIdx] = cowDP[cowIdx - 1] + cowIdx;
        hsDP[hsIdx] = hsDP[hsIdx - 1] + hsIdx;

        cowIdx++;
        hsIdx++;
    }

    return cowDP.length;
}

console.log(solution(5, 6));
