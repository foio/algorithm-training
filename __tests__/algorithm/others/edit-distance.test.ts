import {
  calcEditDistanceIntegration,
  calcEditDistanceRecursive,
} from '../../../src/algorithm/others/edit-distance';

describe('edit distance', () => {
  it('recursive', () => {
    const distance = calcEditDistanceRecursive('123', '23456789');
    expect(distance).toBe(7);
  });

  it('iteration', () => {
    const distance = calcEditDistanceIntegration('123', '23456789');
    expect(distance).toBe(7);
  });
});
