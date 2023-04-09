import {
  calcMinCoinsRecursive,
  calcMinCoinsRecursiveWithMem,
  calcMinCoinsIntegrationWithDp,
} from '../../../src/algorithm/others/coin-change';

describe('coin change', () => {
  it('recursive', () => {
    const steps1 = calcMinCoinsRecursive([1, 2, 5, 10], 25);
    expect(steps1).toBe(3);

    const steps2 = calcMinCoinsRecursiveWithMem([1, 2, 5, 10], 110);
    expect(steps2).toBe(11);

    const steps3 = calcMinCoinsIntegrationWithDp([1, 2, 5, 10], 110);
    expect(steps3).toBe(11);
  });
});
