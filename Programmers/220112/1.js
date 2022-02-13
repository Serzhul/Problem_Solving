// 백준 1463

function solution(heights) {
    const len = heights.length;

    let curIdx = len - 1;

    const checked = Array.from({ length: len }, () => 0);

    let interrupted = false;

    for (let i = curIdx - 1; i >= 0; i--) {
        interrupted = false;
        for (let j = i; j >= 0; j--) {
            if (heights[curIdx] < heights[j]) {
                interrupted = true;
                checked[curIdx] = j + 1;
                curIdx--;
                break;
            }
        }
        if (!interrupted) curIdx--;
    }

    console.log(checked);
    return checked;
}

solution([50, 57, 52, 53, 51]);
