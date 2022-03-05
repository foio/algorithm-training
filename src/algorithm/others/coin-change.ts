/*
 * 给你 k 种面值的硬币，面值分别为 c1, c2 ... ck,
 * 每种硬币的数量无限，再给一个总金额 amount，问你最少需要几枚硬币凑出这个金额
 * 如果不可能凑出，算法返回 -1
 */

/**
 * 动态规划三个特征
 * 1. 最优子结构 :   子问题间必须互相独立
 * 2. 重叠子问题 :
 * 3. 状态转移方程 : 原问题拆分为子问题
 */

// 动态规划的一般流程就是三步：暴力的递归解法 -> 带备忘录的递归解法 -> 迭代的动态规划解法

// 递归
const mem: { [key: number]: number } = []; // 消除重叠子问题
export function calcMinCoinsRecursive(
  coinTypes: number[],
  total: number,
): number {
  if (mem[total] !== undefined) {
    return mem[total];
  }
  if (total === 0) {
    return 0;
  } else if (total < 0) {
    return -1;
  }
  let minCoins = Number.MAX_VALUE;
  for (let idx = 0; idx < coinTypes.length; idx++) {
    // 子问题拆分
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const subMinCoins = calcMinCoinsRecursive(
      coinTypes,
      total - coinTypes[idx],
    );
    // 跳过异常情况
    if (subMinCoins === -1) {
      continue;
    }
    minCoins = Math.min(1 + subMinCoins, minCoins);
  }
  if (minCoins === Number.MAX_VALUE) {
    mem[total] = -1;
    return -1;
  }
  mem[total] = minCoins;
  return minCoins;
}

/*
const minCoinsRecursive = calcMinCoinsRecursive([1,2,5,10], 133)
console.log(minCoinsRecursive);
*/

// 迭代dp
export function calcMinCoinsIntegration(
  coinTypes: number[],
  total: number,
): number {
  // dp表
  const dp = new Array<number>(total + 1);
  dp.fill(total + 1, 0);
  //
  dp[0] = 0;
  for (let idx = 0; idx <= total; idx++) {
    for (const coinType of coinTypes) {
      if (idx - coinType < 0) continue;
      dp[idx] = Math.min(dp[idx - coinType] + 1, dp[idx]);
    }
  }
  return dp[total] == total + 1 ? -1 : dp[total];
}
