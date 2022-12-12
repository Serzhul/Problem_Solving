// 집 부수기
// 모든 집 중 몇 개만 부수고 재건축 할 예정
// 출발 위치(0), 끝 위치(E)가 주어지고, 그 사이 집 N개가 주어진다.
// K개 집을 부술 때 인접한 두 집 사이의 거리가 있을 때 그때 최소 거리가 최대가 되도록

const [N, K] = [5, 2];
let [start, end] = [0, 30];
const houses = [3, 7, 17, 11, 24];

let answer = 0;

houses.push(30);
houses.sort((a, b) => a - b);

while (start <= end) {
  /**
   * mid : 두 위치 사이의 거리의 최솟값
   * dist : 두 집 사이의 거리들이 있을 때 최솟값
   * prevHouse : 두 집 사이의 거리를 계산하기 위한 이전 집
   * removeCnt : 집을 부순 수
   *  */

  const mid = Math.floor((start + end) / 2);
  let dist = Infinity;

  let prevHouse = 0;
  let removeCount = 0;

  for (let i = 0; i < houses.length; i += 1) {
    const house = houses[i];
    const diff = house - prevHouse;

    // mid보다 두 집 사이 거리가 짧으면, 집을 제거
    if (diff < mid) removeCount += 1;
    else {
      // diff 중 두 집 사이 거리 중 최솟값을 기록
      prevHouse = house;
      dist = Math.min(dist, diff);
    }
  }

  if (removeCount > K) {
    end = mid - 1;
  } else {
    start = mid + 1;
    if (removeCount === K) {
      // console.log(answer, dist);
      // answer는 집 사이 거리 중 최솟값을 기록한 Dist 중 최댓값을 기록
      answer = Math.max(answer, dist);
    }
  }
}

console.log(answer);
