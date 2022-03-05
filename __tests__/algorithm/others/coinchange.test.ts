import {
  calcMinCoinsRecursive,
  calcMinCoinsIntegration,
} from '../../../src/algorithm/others/coin-change';

describe('coin change', () => {
  it('recursive', () => {
    const steps = calcMinCoinsRecursive([1, 2, 5, 10], 110);
    expect(steps).toBe(11);
  });

  it('integration', () => {
    const steps = calcMinCoinsIntegration([1, 2, 5, 10], 110);
    expect(steps).toBe(11);
  });
});
