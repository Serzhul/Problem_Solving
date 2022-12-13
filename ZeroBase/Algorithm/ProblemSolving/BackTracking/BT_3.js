// 알파벳 탐색
// N,M으로 구성된 보드에서 각 칸에 대문자 알파벳이 적혀있고 (1,1)에 위치
// 말이 상하좌우칸으로 이동할 수 있을 때, 중복으로 거치지 않으면서 가장 많이 이동하는 횟수 구하기

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const [N, M] = [5, 5];
const arr = ["IEFCJ", "FHFKC", "FFALF", "HFGCF", "HMCHH"];

const visit = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

const alpha = {};

for (let i = 0; i < 26; i += 1) {
  const A = "A".charCodeAt();

  alpha[String.fromCharCode(i + A)] = 0;
}

let ans = 0;

function go(x, y, cnt, str) {
  console.log(`x: ${x}, y: ${y}, cnt: ${cnt}, str: ${str}`);

  ans = Math.max(ans, cnt);

  for (let i = 0; i < 4; i += 1) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (visit[nx][ny] === 0 && alpha[arr[nx][ny]] === 0) {
        visit[nx][ny] = 1;
        alpha[arr[nx][ny]] = 1;
        go(nx, ny, cnt + 1, str + arr[nx][ny]);
        alpha[arr[nx][ny]] = 0;
        visit[nx][ny] = 0;
      }
    }
  }
}

// 0,0부터 강제로 시작하는 케이스 설정
go(-1, 0, 0, "");

go(0, 0, 0, "");

console.log(ans);
