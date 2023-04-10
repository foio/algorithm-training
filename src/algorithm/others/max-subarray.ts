/**
 * 比如说输入 nums = [-3,1,3,-1,2,-4,2]，算法返回 5，因为最大子数组 [1,3,-1,2] 的和为 5。
 */

let allTrunMaxValue = Number.MIN_SAFE_INTEGER;

export function maxSubArray(list: number[]): number {
  maxSubArrayInner(list);
  return allTrunMaxValue;
}

export function maxSubArrayInner(list: number[]): number {
  if (list.length === 0) {
    return 0;
  }
  let curTurnMaxValue = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < list.length; i++) {
    const curValue = list[i];
    list.shift();
    const subValue = maxSubArrayInner(list);
    const maxValue = Math.max(subValue + curValue, curValue);
    curTurnMaxValue = maxValue > curTurnMaxValue ? maxValue : curTurnMaxValue;
  }

  allTrunMaxValue =
    curTurnMaxValue > allTrunMaxValue ? curTurnMaxValue : allTrunMaxValue;

  return curTurnMaxValue;
}
