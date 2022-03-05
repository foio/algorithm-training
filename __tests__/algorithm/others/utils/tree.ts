interface TreeNode {
  value: number;
  leftChild: TreeNode | undefined;
  rightChild: TreeNode | undefined;
}

export function buildTree(): TreeNode {
  const node1: TreeNode = {
    value: 1,
    leftChild: undefined,
    rightChild: undefined,
  };

  const node2: TreeNode = {
    value: 2,
    leftChild: undefined,
    rightChild: undefined,
  };

  const node3: TreeNode = {
    value: 3,
    leftChild: undefined,
    rightChild: undefined,
  };

  const node4: TreeNode = {
    value: 4,
    leftChild: undefined,
    rightChild: undefined,
  };

  const node5: TreeNode = {
    value: 5,
    leftChild: undefined,
    rightChild: undefined,
  };

  node1.leftChild = node2;
  node1.rightChild = node3;

  node2.leftChild = node4;
  node2.rightChild = node5;

  return node1;
}
