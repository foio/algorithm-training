import { LinkListNode } from '../../../../src/data-structure/linklist/common';

export function buildLinkList(): LinkListNode<number> {
  const node1: LinkListNode<number> = {
    next: undefined,
    value: 1,
  };
  const node2: LinkListNode<number> = {
    next: undefined,
    value: 2,
  };
  const node3: LinkListNode<number> = {
    next: undefined,
    value: 3,
  };
  const node4: LinkListNode<number> = {
    next: undefined,
    value: 4,
  };
  const node5: LinkListNode<number> = {
    next: undefined,
    value: 5,
  };
  const node6: LinkListNode<number> = {
    next: undefined,
    value: 6,
  };
  const node7: LinkListNode<number> = {
    next: undefined,
    value: 7,
  };

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node3;
  return node1;
}
