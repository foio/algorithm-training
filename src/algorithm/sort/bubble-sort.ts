/* 核心思想:
 * 1. 依次交换两个相邻的元素, 每轮交换都会将最大元素放在数组末尾
 * 2. 逐步缩小交换数组的范围, 排查已经有序的数组尾部
 */

export function bubbleSort(list: number[]): void {
  for (let outerIdx = list.length - 1; outerIdx >= 0; outerIdx--) {
    for (let innerIdx = 0; innerIdx < outerIdx; innerIdx++) {
      if (list[innerIdx] > list[innerIdx + 1]) {
        const temp = list[innerIdx];
        list[innerIdx] = list[innerIdx + 1];
        list[innerIdx + 1] = temp;
      }
    }
  }
}
