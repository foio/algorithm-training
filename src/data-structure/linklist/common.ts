// 定义链表基础数据结构
export interface LinkListNode<T> {
  next: LinkListNode<T> | undefined;
  value: T;
}

// 输出链表
export function printLinkList(
  headNode: LinkListNode<unknown> | undefined,
): void {
  let curNode = headNode;
  while (curNode) {
    console.log(curNode.value);
    curNode = curNode.next;
  }
}
