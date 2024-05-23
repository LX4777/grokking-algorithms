export class GraphNode {
  private val: number;
  private next: GraphNode[] | null;

  constructor(val: number, next: GraphNode[] = null) {
    this.val = val;
    this.next = next;
  }

  getVal(): number {
    return this.val;
  }

  setVal(val: number): void {
    this.val = val;
  }

  getNext(): GraphNode[] | null {
    return this.next;
  }

  setNext(next: GraphNode[] | null): void {
    this.next = next;
  }

  pushNext(graph: GraphNode): void {
    this.next.push(graph);
  }

  delete(index: number): void {
    this.next.splice(0, 1);
  }
}
