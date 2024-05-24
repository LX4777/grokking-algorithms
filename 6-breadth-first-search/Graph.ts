export class Graph<T> {
  private val: T;
  private next: Graph<T>[];

  constructor(val: T, next: Graph<T>[] = []) {
    this.val = val;
    this.next = next;
  }

  getVal(): T {
    return this.val;
  }

  setVal(val: T): void {
    this.val = val;
  }

  getNext(): Graph<T>[] {
    return this.next;
  }

  setNext(next: Graph<T>[]): void {
    this.next = next;
  }

  pushNext(graph: Graph<T>): void {
    this.next.push(graph);
  }

  delete(index: number): void {
    this.next.splice(0, 1);
  }
}
