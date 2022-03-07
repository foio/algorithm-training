import { LinkListNode } from './common';

export function findCircleInList<T>(
  startNode: LinkListNode<T>,
): LinkListNode<T> | undefined {
  let slowNode: LinkListNode<T> | undefined = startNode;
  let fastNode: LinkListNode<T> | undefined = startNode;

  do {
    slowNode = slowNode.next;
    fastNode = fastNode.next?.next;
  } while (
    slowNode !== undefined &&
    fastNode !== undefined &&
    slowNode !== fastNode
  );

  if (fastNode === undefined && slowNode !== undefined) {
    return undefined;
  }

  if (fastNode === slowNode && fastNode !== undefined) {
    // 找到环
    slowNode = startNode;
    // 定位环的起始点
    while (slowNode !== fastNode) {
      slowNode = slowNode?.next;
      fastNode = fastNode?.next;
    }
    return slowNode;
  }

  return undefined;
}
