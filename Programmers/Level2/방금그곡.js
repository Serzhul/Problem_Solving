function solution(m, musicinfos) {
  const newM = m.replace(/(\D)#/g, (s, p1) => p1.toLowerCase());

  function toMinute(t) {
    const [hour, min] = t;
    return hour * 60 + min * 1;
  }

  function play(time, song) {
    const { length } = song;
    return song.repeat(time / length) + song.substring(0, time % length);
  }

  const broadcast = musicinfos.map((x) => {
    const [startTime, endTime, title, melody] = x.split(",");
    const song = melody.replace(/(\D)#/g, (s, p1) => p1.toLowerCase());

    return [
      title,
      play(toMinute(endTime.split(":")) - toMinute(startTime.split(":")), song),
    ];
  });

  const answer = broadcast.reduce((ans, x) => {
    const melody = x[1];
    if (melody.includes(newM)) {
      if (ans.length === 0 || ans[1].length < melody.length) return x;
    }
    return ans;
  }, []);
  return answer.length === 0 ? "(None)" : answer[0];
}

console.log(
  solution("CC#BCC#BCC#BCC#B", [
    "03:00,03:30,FOO,CC#B",
    "04:00,04:08,BAR,CC#BCC#BCC#B",
  ])
);
