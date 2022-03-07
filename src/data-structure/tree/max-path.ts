import { TreeNode } from './common';

export let maxValue = Number.MIN_SAFE_INTEGER;

export function maxPathSum(tree: TreeNode): number {
  if (!tree.leftChild && !tree.rightChild) {
    return tree.value;
  }

  const leftMaxPathSum = tree.leftChild ? maxPathSum(tree.leftChild) : 0;
  const rightMaxPathSum = tree.rightChild ? maxPathSum(tree.rightChild) : 0;

  const curPathValue = tree.value + Math.max(leftMaxPathSum, rightMaxPathSum);
  if (maxValue < curPathValue) {
    maxValue = curPathValue;
  }
  return curPathValue;
}
