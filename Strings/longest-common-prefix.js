/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  const target = strs[0];
  let ans = "";
  for (let index = 0; index < target.length; index++) {
    let len = 0;
    for (let j = 1; j < strs.length; j++) {
      if (target[index] === strs[j][index]) {
        len++;
      }
    }
    if (len === strs.length - 1) {
      ans += target[index];
    } else {
      break;
    }
  }

  return ans;
};

// Divide and Conquer
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  return _longestCommonPrefix(strs, 0, strs.length - 1);
};

/**
 * @param {string} left
 * @param {string} right
 * @return {string}
 */
const commonPrefix = (left, right) => {
  // 2つの文字列を比較して共通する文字列を返す
  const min = Math.min(left.length, right.length);
  for (let index = 0; index < min; index++) {
    if (left[index] !== right[index]) {
      return left.substring(0, index);
    }
  }
  return left.substring(0, min);
};

/**
 * @param {string[]} strs
 * @param {number} left
 * @param {number} right
 * @return {string}
 */

const _longestCommonPrefix = (strs, left, right) => {
  // 同じ位置を表すのであれば、それを返す
  if (left === right) {
    return strs[left];
  } else {
    // 真ん中で分けて、それぞれの共通項からさらに共通部分を求める
    const mid = Math.floor((left + right) / 2);
    const lcpLeft = _longestCommonPrefix(strs, left, mid);
    const lcpRight = _longestCommonPrefix(strs, mid + 1, right);
    return commonPrefix(lcpLeft, lcpRight);
  }
};

// binary tree

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  let minLen = Number.MAX_SAFE_INTEGER;
  for (let index = 0; index < strs.length; index++) {
    // strsの中で最も短い文字列の長さを入れている
    minLen = Math.min(minLen, strs[index].length);
  }
  let low = 1;
  let high = minLen; // 一番短い文字列の長さを入れる
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    // isCommonPrefixが上手く行けばlowはmidの+1
    // 逆ならばhightがmid-1
    // すなわち上手く行っている場合は、midまでは含まれることが保証されているのでそれ以下の文字列は気にしなくていい
    // したがって、lowはmidに+1した値で考える
    // 一方失敗した場合は、それ以上の部分は求める意味がない。すなわち、mid以上は無意味となり、highはmid-1となる
    if (isCommonPrefix(strs, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  // lowは常に成功した値で更新されている。highがその値を下回る、あるいは同じ時、
  // highは成功した値として限界値であるので、highまでの長さで抜き出す
  return strs[0].substring(0, high);
};

/**
 * @param {string[]} strs
 * @param {number} len
 * @return {boolean}
 */

const isCommonPrefix = (strs, len) => {
  // 配列の最初の文字列について、入れた長さでsubstringする
  // subで全て行ければtrue, 失敗したらfalse
  const sub = strs[0].substring(0, len);
  for (let index = 1; index < strs.length; index++) {
    if (!strs[index].startsWith(sub)) {
      return false;
    }
  }
  return true;
};
