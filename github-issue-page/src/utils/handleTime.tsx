export function handleCreateTime(time) {
  const now = new Date().getTime();
  const createdTime = Date.parse(time);
  const remainTime = now - createdTime;
  const convertDay = 24 * 3600 * 1000;
  const convertHour = 3600 * 1000;
  const convertMins = 60 * 1000;
  const days = Math.round(remainTime / convertDay);
  const hours = Math.round((remainTime % convertDay) / convertHour);
  const minutes = Math.round(
    ((remainTime % convertDay) % convertHour) / convertMins
  );
  const seconds = Math.round(
    (((remainTime % convertDay) % convertHour) % convertMins) / 1000
  );

  return days > 0
    ? `${days} days`
    : hours > 0
    ? `${hours} hours`
    : minutes > 0
    ? `${minutes} minutes`
    : seconds > 0
    ? `${seconds} seconds`
    : null;
}
