import { detectCycle } from '../../../src/data-structure/graph/detected-cycle';
import { buildGraphWithCircle } from './util';

describe('graph', () => {
  it('detect cycle', () => {
    const graph = buildGraphWithCircle();
    const circlePath = detectCycle(graph);
    expect(circlePath).toEqual([2, 5, 6, 7, 2]);
  });
});
