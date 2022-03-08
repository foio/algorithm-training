import { topologySort } from '../../../src/data-structure/graph/topology-sort';
import { buildGraphWithNoCircle } from './util';

describe('graph', () => {
  it('topology sort', () => {
    const graph = buildGraphWithNoCircle();
    const topologyPath = topologySort(graph);
    expect(topologyPath).toEqual([6, 5, 3, 4, 2, 1]);
  });
});
