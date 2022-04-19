// 최대 이익이 되는 판매 일자 (가장 싼 날에 사고, 가장 비싼 날에 파는)

// Solution 1 => 시간 초과 (단순 이중 for문 계산시)
// function maxProfit(prices) {
//   let profit = 0;

//   for (let i = 0; i < prices.length; i += 1) {
//     for (let j = i + 1; j < prices.length; j += 1) {
//       profit = Math.max(profit, prices[j] - prices[i]);
//     }
//   }

//   return profit;
// }

// Solution 2 =>  최솟값을 저장해 놓고, 현재 price와 비교하면서 최대 이윤을 갱신하기

function maxProfit(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;

  let profit = 0;

  prices.forEach((price) => {
    if (minPrice > price) minPrice = price;
    profit = Math.max(profit, price - minPrice);
  });

  return profit;
}

maxProfit([7, 1, 5, 3, 6, 4]);
