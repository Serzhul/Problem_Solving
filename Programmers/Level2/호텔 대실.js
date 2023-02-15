const book_time = [
  ["15:55", "19:53"],
  ["15:55", "18:20"],
];

function solution(book_time) {
  function getNextTime(string) {
    const [exitHour, exitMin] = string.split(":");

    return Number(exitHour) * 60 + Number(exitMin) + 10;
  }

  book_time.sort();

  const rooms = [];

  book_time.forEach((time) => {
    const [enterHour, enterMin] = time[0].split(":");
    const startTime = Number(enterHour) * 60 + Number(enterMin);

    const idx = rooms.findIndex((el) => el <= startTime);

    if (idx === -1) rooms.push(getNextTime(time[1]));
    else rooms[idx] = getNextTime(time[1]);
  });

  return rooms.length;
}

console.log(solution(book_time));
