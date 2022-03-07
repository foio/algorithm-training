export interface GraphNode {
  value: number;
  outGoing: GraphNode[] | undefined;
}
