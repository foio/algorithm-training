import { findCircleInList } from '../../../src/data-structure/linklist/find-circle';
import { buildLinkList } from './util';

describe('linklist', () => {
  it('find circle', () => {
    const list = buildLinkList();
    const node = findCircleInList(list);
    expect(node?.value).toBe(3);
  });
});
