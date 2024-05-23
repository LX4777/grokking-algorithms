export class GraphNode<T> {
  private val: T;
  private next: GraphNode<T>[] | null;

  constructor(val: T, next: GraphNode<T>[] = null) {
    this.val = val;
    this.next = next;
  }

  getVal(): T {
    return this.val;
  }

  setVal(val: T): void {
    this.val = val;
  }

  getNext(): GraphNode<T>[] | null {
    return this.next;
  }

  setNext(next: GraphNode<T>[] | null): void {
    this.next = next;
  }

  pushNext(graph: GraphNode<T>): void {
    this.next.push(graph);
  }

  delete(index: number): void {
    this.next.splice(0, 1);
  }
}
