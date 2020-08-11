function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const dict: number[][] = [];
  for (let index = 0; index < numCourses; index++) {
    dict.push([]);
  }
  // dictに依存関係をマッピングする
  for (let index = 0; index < prerequisites.length; index++) {
    const [i, j] = prerequisites[index];
    dict[i].push(j);
  }
  // Nodeに入る前は０
  // Nodeに入ったときは1　1のママ元のNodeに戻るとCycle検知
  // Nodeから抜ける時は2
  const visited = Array(numCourses).fill(0);
  let isCycle = false;
  const ans: number[] = [];

  const dfs = (start: number) => {
    if (isCycle) {
      return;
    } else if (visited[start] === 1) {
      isCycle = true;
    } else if (visited[start] === 0) {
      visited[start] = 1;
      // 依存関係をさかのぼっていく
      // これによりprerequisitesの末端から追加が行われていく
      for (const item of dict[start]) {
        dfs(item);
      }
      visited[start] = 2;
      ans.push(start);
    }
  };

  for (let index = 0; index < numCourses; index++) {
    if (isCycle) break;
    // 依存関係の整理が行われるとこのNodeは終わり、次の依存関係
    if (visited[index] === 0) {
      dfs(index);
    }
  }

  return isCycle ? [] : ans;
}
