import { findMaxPath } from '../../../src/algorithm/others/max-distance';
import { buildTree } from './utils/tree';

describe('max distance', () => {
  it('find max path', () => {
    const tree = buildTree();
    const maxPathValue = findMaxPath(tree);
    expect(maxPathValue).toBe(8);
  });
});
