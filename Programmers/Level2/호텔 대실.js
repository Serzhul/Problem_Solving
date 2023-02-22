const book_time = [
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
];

// function solution(book_time) {
//   function getNextTime(string) {
//     const [exitHour, exitMin] = string.split(":");

//     return Number(exitHour) * 60 + Number(exitMin) + 10;
//   }

//   book_time.sort();

//   const rooms = [];

//   book_time.forEach((time) => {
//     const [enterHour, enterMin] = time[0].split(":");
//     const startTime = Number(enterHour) * 60 + Number(enterMin);

//     const idx = rooms.findIndex((el) => el <= startTime);

//     if (idx === -1) rooms.push(getNextTime(time[1]));
//     else rooms[idx] = getNextTime(time[1]);
//   });

//   return rooms.length;
// }

/* Review 1 */
const getExitTime = (string) => {
  const [exitHour, exitMin] = string.split(":").map(Number);

  return exitHour * 60 + exitMin + 10;
};

function solution(book_time) {
  book_time.sort();

  const rooms = [];

  for (let i = 0; i < book_time.length; i += 1) {
    const [enterTime, exitTime] = book_time[i];
    const [enterHour, enterMin] = enterTime.split(":").map(Number);

    const startTime = enterHour * 60 + enterMin;

    const idx = rooms.findIndex((el) => el <= startTime);

    if (idx === -1) rooms.push(getExitTime(exitTime));
    else rooms[idx] = getExitTime(exitTime);
  }

  return rooms.length;
}

console.log(solution(book_time));
