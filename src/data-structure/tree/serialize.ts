import { TreeNode } from './common';

export function serializeTree(tree: TreeNode | undefined): string[] {
  const serializeList: string[] = [];
  serializeTreeInner(tree, serializeList);
  return serializeList;
}

export function deserializeTree(serializeList: string[]): TreeNode | undefined {
  const treeNode = deserializeTreeInner(serializeList);
  return treeNode.node;
}

function serializeTreeInner(
  tree: TreeNode | undefined,
  serializeList: string[],
) {
  if (tree === undefined) {
    serializeList.push('#');
    return;
  }

  serializeList.push(String(tree.value));

  serializeTreeInner(tree.leftChild, serializeList);
  serializeTreeInner(tree.rightChild, serializeList);
}

export function deserializeTreeInner(
  serializeList: string[],
): { node: TreeNode | undefined; curSerializeList: string[] } {
  if (serializeList.length === 0) {
    return {
      node: undefined,
      curSerializeList: [],
    };
  }

  const curTreeValue = serializeList[0];
  if (curTreeValue === '#') {
    return {
      node: undefined,
      curSerializeList: serializeList.slice(1),
    };
  }

  const curNode: TreeNode = {
    value: Number(curTreeValue),
    leftChild: undefined,
    rightChild: undefined,
  };

  const leftChild = deserializeTreeInner(serializeList.slice(1));
  curNode.leftChild = leftChild.node;

  const rightChild = deserializeTreeInner(leftChild.curSerializeList);
  curNode.rightChild = rightChild.node;
  return {
    node: curNode,
    curSerializeList: rightChild.curSerializeList,
  };
}
