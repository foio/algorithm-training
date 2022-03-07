import { findMaxPath } from '../../../src/data-structure/tree/max-distance';
import { buildTree } from '../../algorithm/others/utils/tree';

describe('max distance', () => {
  it('find max path', () => {
    const tree = buildTree();
    const maxPathValue = findMaxPath(tree);
    expect(maxPathValue).toBe(8);
  });
});
