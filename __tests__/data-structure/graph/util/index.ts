import { GraphNode } from '../../../../src/data-structure/graph/common';

export function buildGraphWithCircle(): GraphNode {
  const graphNode1: GraphNode = { value: 1, outGoing: [] };
  const graphNode2: GraphNode = { value: 2, outGoing: [] };
  const graphNode3: GraphNode = { value: 3, outGoing: [] };
  const graphNode4: GraphNode = { value: 4, outGoing: [] };
  const graphNode5: GraphNode = { value: 5, outGoing: [] };
  const graphNode6: GraphNode = { value: 6, outGoing: [] };
  const graphNode7: GraphNode = { value: 7, outGoing: [] };
  const graphNode8: GraphNode = { value: 8, outGoing: [] };
  const graphNode9: GraphNode = { value: 9, outGoing: [] };
  const graphNode10: GraphNode = { value: 10, outGoing: [] };

  graphNode1.outGoing?.push(graphNode2);
  graphNode1.outGoing?.push(graphNode3);
  graphNode1.outGoing?.push(graphNode4);
  graphNode2.outGoing?.push(graphNode5);
  graphNode5.outGoing?.push(graphNode6);
  graphNode6.outGoing?.push(graphNode7);
  graphNode7.outGoing?.push(graphNode2);
  graphNode7.outGoing?.push(graphNode8);
  graphNode8.outGoing?.push(graphNode9);
  graphNode8.outGoing?.push(graphNode10);

  return graphNode1;
}

export function buildGraphWithNoCircle(): GraphNode {
  const graphNode1: GraphNode = { value: 1, outGoing: [] };
  const graphNode2: GraphNode = { value: 2, outGoing: [] };
  const graphNode3: GraphNode = { value: 3, outGoing: [] };
  const graphNode4: GraphNode = { value: 4, outGoing: [] };
  const graphNode5: GraphNode = { value: 5, outGoing: [] };
  const graphNode6: GraphNode = { value: 6, outGoing: [] };

  graphNode1.outGoing?.push(graphNode2);
  graphNode2.outGoing?.push(graphNode3);
  graphNode2.outGoing?.push(graphNode4);
  graphNode3.outGoing?.push(graphNode5);
  graphNode4.outGoing?.push(graphNode5);
  graphNode5.outGoing?.push(graphNode6);

  return graphNode1;
}
