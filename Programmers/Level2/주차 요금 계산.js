const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

function solution(fees, records) {
  const parkingMap = {};

  for (let i = 0; i < records.length; i += 1) {
    const [time, carNum, inOut] = records[i].split(" ");
    const [hour, min] = time.split(":").map(Number);

    if (!(carNum in parkingMap) && inOut === "IN") {
      parkingMap[carNum] = [0, "IN", hour * 60 + min];
    } else if (carNum in parkingMap && inOut === "IN") {
      parkingMap[carNum] = [parkingMap[carNum][0], "IN", hour * 60 + min];
    } else {
      let overTime = parkingMap[carNum][2];
      overTime = hour * 60 + min - overTime;

      parkingMap[carNum] = [parkingMap[carNum][0] + overTime, "OUT", 0];
    }
  }
  const answer = Object.entries(parkingMap)
    .sort((a, b) => {
      if (Number(a[0]) < Number(b[0])) return -1;
      if (Number(b[0]) < Number(a[0])) return 1;
      return 1;
    })
    .map((car) => {
      const [carNum, record] = car;
      let [time, inOut, enterTime] = record;
      const [basicTime, basicFee, feeTime, feeVal] = fees;

      if (inOut === "IN") {
        time += 23 * 60 + 59 - enterTime;
      }

      if (time <= basicTime) return basicFee;

      const finalFee =
        basicFee + Math.ceil((time - basicTime) / feeTime) * feeVal;

      return finalFee;
    });

  return answer;
}

console.log(solution(fees, records));
