import { heapSort } from '../../../src/algorithm/sort/heap-sort';

describe('heap sort', () => {
  it('should sort correctly', () => {
    const testList = [3, 5, 8, 1, 2, 9, 10, 6];
    const sortedList: number[] = [];
    heapSort(testList, sortedList);
    expect(sortedList).toEqual([10, 9, 8, 6, 5, 3, 2, 1]);
  });
});
