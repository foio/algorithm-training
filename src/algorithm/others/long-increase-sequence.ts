/**
 *  给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 *  子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 */

export function calcLongSequence(list: number[]): number[] {
  if (list.length === 0) {
    return [];
  } else if (list.length === 1) {
    return [...list];
  } else {
    const first = list.shift();
    if (!first) {
      return [];
    }
    const subList = calcLongSequence(list);
    if (subList[0] > first) {
      subList.unshift(first);
      return subList;
    }
    return subList;
  }
}

export function calcLongSequenceWithDpTable(list: number[]): number {
  if (list.length <= 1) {
    return list.length;
  } else {
    const dpTable = new Array<number>(list.length);
    dpTable.fill(1);
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < i; j++) {
        if (list[i] > list[j]) {
          dpTable[i] = Math.max(dpTable[j] + 1, dpTable[i]);
        }
      }
    }
    let res = 0;
    for (let i = 0; i < dpTable.length; i++) {
      res = Math.max(dpTable[i], res);
    }
    return res;
  }
}
