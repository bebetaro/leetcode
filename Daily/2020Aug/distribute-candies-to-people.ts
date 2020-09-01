function distributeCandies(candies: number, num_people: number): number[] {
  const res = Array(num_people).fill(0);
  const stepSum = (num_people / 2) * (2 + (num_people - 1));
  if (stepSum > candies) {
    for (let index = 0; index < num_people; index++) {
      const num = index + 1;
      if (num > candies) {
        res[index] = candies;
        candies = 0;
      } else {
        res[index] = num;
        candies -= num;
      }
    }
  } else {
    const step = Math.floor(candies / stepSum) + 1;
    for (let i = 0; i < step; i++) {
      for (let j = 0; j < num_people; j++) {
        if (candies === 0) continue;
        const num = i * num_people + j + 1;
        if (num > candies) {
          res[j] += candies;
          candies = 0;
        } else {
          res[j] += num;
          candies -= num;
        }
      }
    }
  }
  return res;
}
