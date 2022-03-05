// 全排列
export function backTrace(curItems: number[], trace: number[]): void {
  if (curItems.length == 0) {
    console.log(trace);
  }
  for (const curItem of curItems) {
    trace.push(curItem);
    backTrace(
      curItems.filter((item) => item !== curItem),
      trace,
    );
    trace.pop();
  }
}

// n皇后
function isPlaceEmpty(
  queenCount: number,
  xIdx: number,
  yIdx: number,
  solution: { [key: string]: number },
) {
  let emptyFlag = true;
  Object.keys(solution).forEach((keyIdx) => {
    const xKeyIdx = Number(keyIdx);
    const yKeyIdx = solution[xKeyIdx];

    if (xIdx === xKeyIdx || yIdx === yKeyIdx) {
      emptyFlag = false;
      return;
    }

    if (yKeyIdx < queenCount && xKeyIdx < queenCount) {
      for (let i = xKeyIdx; i < queenCount; i++) {
        for (let j = yKeyIdx; j < queenCount; j++) {
          if (i === xIdx && j === yIdx) {
            emptyFlag = false;
            return;
          }
        }
      }
    }

    if (xKeyIdx > 0 && yKeyIdx > 0) {
      for (let i = xKeyIdx; i >= 0; i--) {
        for (let j = yKeyIdx; j >= 0; j--) {
          if (i === xIdx && j === yIdx) {
            emptyFlag = false;
            return;
          }
        }
      }
    }

    if (xKeyIdx > 0 && yKeyIdx < queenCount) {
      for (let i = xKeyIdx; i < queenCount; i++) {
        for (let j = yKeyIdx; j >= 0; j--) {
          if (i === xIdx && j === yIdx) {
            emptyFlag = false;
            return;
          }
        }
      }
    }

    if (xKeyIdx < queenCount && yKeyIdx >= 0) {
      for (let i = xKeyIdx; i >= 0; i--) {
        for (let j = yKeyIdx; j < queenCount; j++) {
          if (i === xIdx && j === yIdx) {
            emptyFlag = false;
            return;
          }
        }
      }
    }
  });

  return emptyFlag;
}

export function backTrace1(
  queenCount: number,
  curSize: number,
  solution: { [key: string]: number },
): void {
  if (curSize === queenCount) {
    console.log(solution);
  }

  for (let i = 0; i < queenCount; i++) {
    for (let j = 0; j < queenCount; j++) {
      if (isPlaceEmpty(queenCount, i, j, solution)) {
        solution[i] = j;
        backTrace1(queenCount, curSize + 1, solution);
        delete solution[i];
      }
    }
  }
}
