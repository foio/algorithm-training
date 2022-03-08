import { GraphNode } from './common';

/**
 * 对有向无环图进行拓扑排序
 */

export function topologySort(graph: GraphNode): number[] {
  const topologyPath: number[] = [];
  const visited: { [key: number]: boolean } = {};
  topologySortInner(graph, visited, topologyPath);
  return topologyPath;
}

function topologySortInner(
  graph: GraphNode,
  visited: { [key: number]: boolean },
  topologyPath: number[],
): void {
  // 是否已经访问过
  if (visited[graph.value]) {
    return;
  }

  // 标记为已访问
  visited[graph.value] = true;

  // 递归深度优先遍历图
  if (graph.outGoing) {
    for (const graphNode of graph.outGoing) {
      topologySortInner(graphNode, visited, topologyPath);
    }
  }

  // 图的后序遍历结果就是拓扑排序结果
  topologyPath.push(graph.value);
}
