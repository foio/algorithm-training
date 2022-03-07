import {
  deserializeTree,
  serializeTree,
} from '../../../src/data-structure/tree/serialize';
import { buildTree } from '../../algorithm/others/utils/tree';

describe('serialize/deserialize', () => {
  it('serialize', () => {
    const tree = buildTree();
    const serializeString = serializeTree(tree);
    expect(serializeString).toEqual([
      '1',
      '2',
      '4',
      '#',
      '#',
      '5',
      '#',
      '#',
      '3',
      '#',
      '#',
    ]);
  });

  it('deserialize', () => {
    const treeList = ['1', '2', '4', '#', '#', '5', '#', '#', '3', '#', '#'];
    const treeNode = deserializeTree(treeList);
    const serializeString = serializeTree(treeNode);
    expect(serializeString).toEqual([
      '1',
      '2',
      '4',
      '#',
      '#',
      '5',
      '#',
      '#',
      '3',
      '#',
      '#',
    ]);
  });
});
