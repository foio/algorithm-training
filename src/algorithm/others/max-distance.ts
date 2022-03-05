interface TreeNode {
  value: number;
  leftChild: TreeNode | undefined;
  rightChild: TreeNode | undefined;
}

export function findMaxPath(root: TreeNode | undefined): number {
  if (!root) {
    return 0;
  }
  const leftMaxPath = findMaxPath(root.leftChild);
  const rightMaxPath = findMaxPath(root.rightChild);
  const currentValue = root.value;

  const maxSubTreePath = currentValue + Math.max(leftMaxPath, rightMaxPath);
  return maxSubTreePath;
}
