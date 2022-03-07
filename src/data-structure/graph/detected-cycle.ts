import { GraphNode } from './common';

/**
 * 检查有向无环图中的环
 */

export function detectCycle(graph: GraphNode): number[] {
  const path: number[] = [];
  const visited: { [key: number]: boolean } = {};
  const circlePath: number[] = [];
  detectCycleInner(graph, path, visited, circlePath);
  return circlePath;
}

export function detectCycleInner(
  graph: GraphNode,
  path: number[],
  visited: { [key: number]: boolean },
  circlePath: number[],
): void {
  // 是否发现环
  if (path.includes(graph.value)) {
    const startIdx = path.indexOf(graph.value);
    path.slice(startIdx).forEach((value) => {
      circlePath.push(value);
    });
    circlePath.push(graph.value);
    return;
  }

  // 是否已经访问过
  if (visited[graph.value]) {
    return;
  }

  // 标记为已访问
  visited[graph.value] = true;

  // 递归深度优先遍历图
  if (graph.outGoing) {
    path.push(graph.value);
    for (const graphNode of graph.outGoing) {
      detectCycleInner(graphNode, path, visited, circlePath);
    }
    path.pop();
  }
}
