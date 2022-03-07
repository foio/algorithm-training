/*
 *  核心思想:
 *  构造一颗完全二叉树，父节点的值大于孩子节点的值
 *  完全二叉树可以用数组表示(层序遍历的顺序): 父节点下标为N, 则左孩子节点为2N+1, 右孩子节点为2N+2
 */

// 从最底层节点开始逐步向上调整顺序
export function heapSort(list: number[], sortedList: number[]): void {
  if (list.length < 1) {
    return;
  }

  for (let idx = Math.floor(list.length / 2); idx >= 0; idx--) {
    // 保证父节点大于孩子节点
    let curValue = list[idx];
    const curLeftValue = list[2 * idx + 1];
    const curRightValue = list[2 * idx + 2];

    if (curLeftValue !== undefined) {
      // 检查左节点
      if (curValue < curLeftValue) {
        list[idx] = curLeftValue;
        list[2 * idx + 1] = curValue;
        curValue = curLeftValue;
      }
    }

    if (curRightValue != undefined) {
      // 检查右节点
      if (curValue < curRightValue) {
        list[idx] = curRightValue;
        list[2 * idx + 2] = curValue;
      }
    }
  }

  // 搜集排序数据
  sortedList.push(list[0]);

  // 对子列表进行堆排序
  heapSort(list.slice(1), sortedList);
}
