/**
 * 核心思想:
 * 找到一个支点, 将所有小于支点的元素移动到支点左边, 将所有大于支点的元素移动端支点右边
 * 此时: 支点的位置就是他的排序配置, 而支点前和支点后的值相对有序
 */

export function quickSort(list: number[]): number[] {
  const sortedList: number[] = [];
  quickSortInner(list, sortedList, 0);
  return sortedList;
}

function quickSortInner(
  list: number[],
  sortedList: number[],
  startIdx: number,
): void {
  // 寻找支点
  const partitionIdx = partition(list);

  // 收集逻辑
  if (partitionIdx === 0) {
    for (let idx = 0; idx < list.length; idx++) {
      sortedList[startIdx + idx] = list[idx];
    }
  } else {
    sortedList[startIdx + partitionIdx] = list[partitionIdx];
  }

  // 分治逻辑
  if (partitionIdx > 0) {
    quickSortInner(list.slice(0, partitionIdx), sortedList, startIdx);
  }
  if (partitionIdx + 1 < list.length - 1) {
    quickSortInner(
      list.slice(partitionIdx + 1),
      sortedList,
      startIdx + partitionIdx + 1,
    );
  }
}

export function partition(list: number[]): number {
  if (list.length <= 1) {
    return -1;
  }

  // 选支点
  const pivot = list[0];

  let prePivotIdx = 1,
    postPivotIdx = list.length - 1;
  while (prePivotIdx < postPivotIdx) {
    if (list[prePivotIdx] > pivot && list[postPivotIdx] < pivot) {
      // 满足条件时交换位置
      const temp = list[prePivotIdx];
      list[prePivotIdx] = list[postPivotIdx];
      list[postPivotIdx] = temp;

      prePivotIdx++;
      postPivotIdx--;
    } else if (list[prePivotIdx] > pivot && list[postPivotIdx] > pivot) {
      postPivotIdx--;
    } else if (list[prePivotIdx] < pivot && list[postPivotIdx] < pivot) {
      prePivotIdx++;
    } else if (list[prePivotIdx] < pivot && list[postPivotIdx] > pivot) {
      prePivotIdx++;
      postPivotIdx--;
    }
  }

  let partitionIdx = prePivotIdx;

  // 特殊情况处理
  if (prePivotIdx === postPivotIdx && list[prePivotIdx] < pivot) {
    partitionIdx = prePivotIdx + 1;
  }

  // 将支点移动到合适位置
  list.splice(partitionIdx, 0, pivot);

  // 找到支点位置
  list.shift();

  return prePivotIdx - 1;
}
