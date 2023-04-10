import { maxSubArray } from '../../../src/algorithm/others/max-subarray';

describe('long sequence', () => {
  it('recursive', () => {
    const res = maxSubArray([-3, 1, 3, -1, 2, -4, 2]);
    expect(res).toEqual(5);
  });
});
