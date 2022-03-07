import { detectCycle } from '../../../src/data-structure/graph/detected-cycle';
import { buildGraph } from './util';

describe('graph', () => {
  it('detect cycle', () => {
    const graph = buildGraph();
    const circlePath = detectCycle(graph);
    expect(circlePath).toEqual([2, 5, 6, 7, 2]);
  });
});
