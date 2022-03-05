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
