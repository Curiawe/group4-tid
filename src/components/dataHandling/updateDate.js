export default function updateDate(date, time) {
  let hours;
  date = new Date(date);
  time = String(time);
  if (time.includes(".")) {
    hours = time.split(".");
  } else {
    hours = time.split(":");
  }
  hours[0] = parseInt(hours[0]);
  hours[1] = parseInt(hours[1]);
  date.setHours(hours[0], hours[1]);
  return date;
}
