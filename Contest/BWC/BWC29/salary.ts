function average(salary: number[]): number {
  const max = Math.max(...salary);
  const min = Math.min(...salary);
  const filteredArray = salary.filter((item) => item !== max && item !== min);
  const sum = filteredArray.reduce((acc, cur) => acc + cur);
  return sum / filteredArray.length;
}
