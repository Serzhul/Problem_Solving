// nums 배열과 숫자 k가 주어질때, k만큼 오른쪽으로 순회하는 로직을 작성

// 추가 목표 : 가능한한 많은 솔루션을 생각해볼 것, 공간 복잡도 O(1)로 작성

const rotate = (nums, k) => {
  const newK = k % nums.length;

  const reverse = (arr, start, end) => {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start += 1;
      end -= 1;
    }
  };

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
