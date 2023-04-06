import {
  calcLongSequence,
  calcLongSequenceWithDpTable,
} from '../../../src/algorithm/others/long-increase-sequence';

describe('long sequence', () => {
  it('recursive', () => {
    const res = calcLongSequence([10, 1, 8, 2, 4, 3, 5, 9, 6, 10, 7, 11]);
    expect(res).toEqual([1, 2, 3, 5, 6, 7, 11]);
    const res1 = calcLongSequence([10, 9, 2, 5, 3, 7, 101, 18]);
    expect(res1).toEqual([2, 3, 7, 18]);
  });

  it('iteration', () => {
    const res = calcLongSequenceWithDpTable([
      10,
      1,
      8,
      2,
      4,
      3,
      5,
      9,
      6,
      10,
      7,
      11,
    ]);
    expect(res).toBe(7);
  });
});
