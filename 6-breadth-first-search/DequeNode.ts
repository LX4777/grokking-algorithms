export class DequeNode<T> {
  private val: number;
  private next: DequeNode<T> | null;
  private prev: DequeNode<T> | null;

  constructor(
    val: number,
    next: DequeNode<T> | null = null,
    prev: DequeNode<T> | null = null
  ) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }

  setVal(val: number): void {
    this.val = val;
  }

  getVal(): number {
    return this.val;
  }

  setNext(next: DequeNode<T> | null): void {
    this.next = next;
  }

  getNext(): DequeNode<T> | null {
    return this.next;
  }

  setPrev(prev: DequeNode<T> | null): void {
    this.prev = prev;
  }

  getPrev(): DequeNode<T> | null {
    return this.prev;
  }
}
