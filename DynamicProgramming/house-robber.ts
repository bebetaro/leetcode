function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let max = 0;
  const arr = nums.map((item) => ({ val: item, max: 0 }));

  const updateMAX = (money: number) => {
    if (money > max) {
      max = max + money;
    }
  };

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i - 2] ? arr[i - 2] : { val: 0, max: 0 };
    const prev = arr[i - 1] ? arr[i - 1] : { val: 0, max: 0 };
    const money =
      elem.max + arr[i].val > prev.max ? elem.max + arr[i].val : prev.max;
    arr[i] = { ...arr[i], max: money };
    updateMAX(money);
  }

  return max;
}
