function solution(dartResult) {
    const nums = [];
    const strings = [];

    let tempStr = '';

    let total = 0;
    let wasNum = false;

    dartResult.split('').forEach((res, i) => {
        if (!isNaN(res) && tempStr === '' && !wasNum) {
            nums.push(+res);
            wasNum = true;
        } else if (!isNaN(res) && tempStr === '' && wasNum) {
            nums.pop();
            nums.push(10);
        } else if (!isNaN(res) && tempStr !== '') {
            nums.push(+res);
            strings.push(tempStr);
            tempStr = '';
            wasNum = true;
        } else {
            tempStr += res;
            if (i === dartResult.length - 1) strings.push(tempStr);
            wasNum = false;
        }
    });

    const calPoint = (area, num) => {
        if (area === 'S') return num ** 1;
        if (area === 'D') return num ** 2;
        return num ** 3;
    };

    let prevPoint = 0;

    for (let i = 0; i < nums.length; i += 1) {
        const hasPrice = strings[i].length !== 1;

        if (!hasPrice) {
            prevPoint = calPoint(strings[i], nums[i]);
            total += prevPoint;
        } else {
            const [area, option] = strings[i].split('');

            const tempPoint = prevPoint;

            if (option === '*') {
                prevPoint = calPoint(area, nums[i]) * 2;
                total += prevPoint - tempPoint + tempPoint * 2;
            } else {
                prevPoint = -calPoint(area, nums[i]);
                total += prevPoint;
            }
        }
    }

    return total;
}

solution('1S2D*3T*');
