function numSubmat(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;

  let ans = 0;
  for (let up = 0; up < m; up++) {
    // hを全て1で満たしたn(列の数)分の配列を作る
    let h: number[] = Array(n).fill(1);
    //
    for (let down = up; down < m; down++) {
      // このようにすることで、まずdown = upの時はその行のsubmatrixを算出する(down = 0なら先頭のsubmatrix)
      // その後、一つずつ行をおろしていく。この時、hには先程までの行の情報が入っているので、
      // それを用いることで、列の情報を算出できる(down = 1, down = 2,とmatrixを降りていく時に、前の行の情報と掛け合わせるので、matrixの縦がわかる)
      // これを最後まで繰り返す
      h = h.map((item, index) => item && mat[down][index]);
      ans += countOneRow(h);
    }
  }
  return ans;
}

const countOneRow = (arr: number[]) => {
  let ans = 0;
  let length = 0;
  for (let index = 0; index < arr.length; index++) {
    length = arr[index] === 0 ? 0 : length + 1;
    ans += length;
  }
  return ans;
};
