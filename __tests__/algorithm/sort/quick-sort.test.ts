import { quickSort } from '../../../src/algorithm/sort/quick-sort';

describe('bubble sort', () => {
  it('should sort correctly', () => {
    const testList = [3, 5, 8, 1, 2, 9, 10, 6];
    const sortedList = quickSort(testList);
    expect(sortedList).toEqual([1, 2, 3, 5, 6, 8, 9, 10]);
  });
});
