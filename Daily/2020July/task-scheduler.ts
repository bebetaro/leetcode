function leastInterval(tasks: string[], n: number): number {
  if (n === 0) {
    return tasks.length;
  }
  const taskMap = new Map<string, number>();
  const coolMap = new Map<string, number>();
  const ans: string[] = [];
  let eachTask = [...new Set(tasks)];
  for (let index = 0; index < tasks.length; index++) {
    const num = taskMap.get(tasks[index]) || 0;
    taskMap.set(tasks[index], num + 1);
  }
  while (taskMap.size !== 0) {
    const items = eachTask.filter((item) => !coolMap.has(item));
    if (items.length === 0) {
      ans.push("idle");
    } else {
      let item = "";
      let max = 0;
      for (const i of items) {
        const num = taskMap.get(i) || 0;
        if (num > max) {
          item = i;
        }
      }
      const num = taskMap.get(item) || 0;
      if (num - 1 === 0) {
        taskMap.delete(item);
        eachTask = [...taskMap.keys()];
      } else {
        taskMap.set(item, num - 1);
        coolMap.set(item, n + 1);
      }
    }
    for (const [key, value] of coolMap) {
      if (value - 1 === 0) {
        coolMap.delete(key);
      } else {
        coolMap.set(key, value - 1);
      }
    }
  }
  return ans.length;
}
