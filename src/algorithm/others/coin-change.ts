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
// 算法复杂度非常大(指数级):介于 coinTypes.lenght^(total/max(coinTypes))和coinTypes.lenght^(total/min(coinTypes))之间
export function calcMinCoinsRecursive(
  coinTypes: number[],
  total: number,
): number {
  if (total === 0) {
    return 0;
  }
  if (total < 0) {
    return -1;
  }
  let minCoinsCnt = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < coinTypes.length; i++) {
    const curMinCnt = calcMinCoinsRecursive(coinTypes, total - coinTypes[i]);
    if (curMinCnt >= 0) {
      minCoinsCnt = Math.min(curMinCnt + 1, minCoinsCnt);
    }
  }
  return minCoinsCnt;
}

// 递归使用mem剪枝
// 算法复杂度非常大(指数级):介于 coinTypes.lenght*(total/max(coinTypes))和coinTypes.lenght*(total/min(coinTypes))之间
const mem: { [key: number]: number } = {};
export function calcMinCoinsRecursiveWithMem(
  coinTypes: number[],
  total: number,
): number {
  if (mem[total]) {
    return mem[total];
  }

  if (total === 0) {
    mem[total] = 0;
    return 0;
  }
  if (total < 0) {
    mem[total] = -1;
    return -1;
  }
  let minCoinsCnt = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < coinTypes.length; i++) {
    const curMinCnt = calcMinCoinsRecursiveWithMem(
      coinTypes,
      total - coinTypes[i],
    );
    if (curMinCnt >= 0) {
      minCoinsCnt = Math.min(curMinCnt + 1, minCoinsCnt);
    }
  }
  mem[total] = minCoinsCnt == Number.MAX_SAFE_INTEGER ? -1 : minCoinsCnt;
  return mem[total];
}

/**
 * 使用DP查表
 */
export function calcMinCoinsIntegrationWithDp(
  coinTypes: number[],
  total: number,
): number {
  const dpTable = new Array<number>(total + 1);
  dpTable.fill(total + 1);
  dpTable[0] = 0;
  for (let i = 0; i <= total; i++) {
    for (const coinType of coinTypes) {
      if (i - coinType < 0) {
        continue;
      }
      dpTable[i] = Math.min(dpTable[i - coinType] + 1, dpTable[i]);
    }
  }

  return dpTable[total] === total + 1 ? -1 : dpTable[total];
}
