// [4,2,3,1] => 각각이 Building의 높이라고 했을 때, 바다를 볼 수 있는 Building을 출력을 오름차순으로 정렬해서 출력

const solution = (buildings) => {};

// const solution = (buildings) => {
//   const canView = [];

//   let curIdx = 0;

//   while (curIdx < buildings.length) {
//     let ocean = true;
//     for (let i = curIdx + 1; i < buildings.length; i++) {
//       if (buildings[curIdx] < buildings[i]) ocean = false;
//     }
//     if (ocean) canView.push(curIdx);
//     curIdx++;
//   }
//   return canView;
// };

solution([5, 6, 2, 3, 7, 1]);
