/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (bloomDay.length < m * k) {
    return -1;
  }
  let max = Math.max(...bloomDay);
  let min = Math.min(...bloomDay);
  let day = Math.floor((max + min) / 2);

  while (day <= max) {
    const regexp = new RegExp(`X{1,${k}}|_+`, "g");
    const mapped = bloomDay
      .map((item) => {
        if (item <= day) {
          return "X";
        } else {
          return "_";
        }
      })
      .join("")
      .match(regexp)
      .filter((item) => item[0] === "X" && item.length === k);

    if (mapped.length >= m) {
      max = day - 1;
    } else {
      min = day + 1;
    }
    day = Math.round((max + min) / 2);
  }
  return day;
};
