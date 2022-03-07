import { maxPathSum } from '../../../src/data-structure/tree/max-path';
import { buildTree } from '../../algorithm/others/utils/tree';

describe('max path sum', () => {
  it('find max path', () => {
    const tree = buildTree();
    const maxPathValue = maxPathSum(tree);
    expect(maxPathValue).toBe(8);
  });
});
