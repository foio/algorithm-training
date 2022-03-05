/*
给你两个单词word1 和word2，请你计算出将word1转换成word2 所使用的最少操作数。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
*/

function getSubString(text: string, fromIdx: number): string | undefined {
  if (text.length > fromIdx) {
    return text.substring(fromIdx);
  }
  return undefined;
}

function handleBadCaseDistance(
  fromText: string | undefined,
  toText: string | undefined,
): number {
  if (fromText && !toText) {
    return fromText.length;
  } else if (!fromText && toText) {
    return toText.length;
  }
  return 0;
}

const mem: { [key: string]: number } = {};

function getCacheKey(
  subFromText: string | undefined,
  subToText: string | undefined,
): string {
  const subFromIdx = subFromText?.length || 0;
  const subToIdx = subToText?.length || 0;
  return `${subFromIdx}:${subToIdx}`;
}

function calcAndRemember(
  subFromText: string | undefined,
  subToText: string | undefined,
): number {
  const cacheKey = getCacheKey(subFromText, subToText);
  if (mem[cacheKey]) {
    return mem[cacheKey];
  } else {
    const step = calcEditDistanceRecursive(subFromText, subToText);
    mem[cacheKey] = step;
    return step;
  }
}

// 记忆递归
export function calcEditDistanceRecursive(
  fromText: string | undefined,
  toText: string | undefined,
): number {
  if (!fromText || !toText) {
    return handleBadCaseDistance(fromText, toText);
  }

  const subFromText = getSubString(fromText, 1);
  const subToText = getSubString(toText, 1);
  if (fromText[0] === toText[0]) {
    return calcAndRemember(subFromText, subToText);
  } else {
    const insertStep = calcAndRemember(fromText, subToText) + 1;
    const deleteStep = calcAndRemember(subFromText, toText) + 1;
    const replaceStep = calcAndRemember(subFromText, subToText) + 1;
    const minStep = Math.min(insertStep, deleteStep, replaceStep);
    return minStep;
  }
}

// DP表
class DpTable {
  private dpCache: { [key: string]: number } = {};

  get(i: number, j: number) {
    if (i === 0) {
      return j;
    }
    if (j === 0) {
      return i;
    }
    const key = `${i}-${j}`;
    return this.dpCache[key];
  }

  set(i: number, j: number, value: number) {
    const key = `${i}-${j}`;
    this.dpCache[key] = value;
  }
}

export function calcEditDistanceIntegration(
  fromText: string,
  toText: string,
): number {
  const dpTable = new DpTable();
  for (let fromIdx = 1; fromIdx < fromText.length; fromIdx++) {
    for (let toIdx = 1; toIdx < toText.length; toIdx++) {
      if (fromText[fromIdx] === toText[toIdx]) {
        dpTable.set(fromIdx, toIdx, dpTable.get(fromIdx - 1, toIdx - 1));
      } else {
        const insertStep = dpTable.get(fromIdx - 1, toIdx) + 1;
        const deleteStep = dpTable.get(fromIdx, toIdx - 1) + 1;
        const replaceStep = dpTable.get(fromIdx - 1, toIdx - 1) + 1;
        dpTable.set(
          fromIdx,
          toIdx,
          Math.min(insertStep, deleteStep, replaceStep),
        );
      }
    }
  }
  return dpTable.get(fromText.length - 1, toText.length - 1);
}
