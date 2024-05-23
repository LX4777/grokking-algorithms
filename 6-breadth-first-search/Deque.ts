import { DequeNode } from "./DequeNode";

export class Deque<T> {
  private head: DequeNode<T>;
  private current: DequeNode<T>;
  private tail: DequeNode<T>;

  constructor(head: DequeNode<T>) {
    this.head = head;
    this.current = head;

    let temp = head;
    while (temp.getNext() !== null) {
      temp = temp.getNext();
    }

    this.tail = temp;
  }

  getHead(): DequeNode<T> {
    return this.head;
  }

  getTail(): DequeNode<T> {
    return this.tail;
  }

  resetCurrent(): void {
    this.current = this.head;
  }

  getCurrent(): DequeNode<T> {
    return this.current;
  }

  next(): void {
    if (this.current.getNext() !== null) {
      this.current = this.current.getNext();
    }
  }

  prev(): void {
    if (this.current.getPrev() !== null) {
      this.current = this.current.getPrev();
    }
  }

  shift(): DequeNode<T> | null {
    let popped = this.head;
    this.head = this.head.getNext();
    this.head.setPrev(null);
    popped.setNext(null);

    return popped;
  }

  pop(): DequeNode<T> | null {
    const popped = this.tail;
    this.tail = this.tail.getPrev();
    this.tail.setNext(null);
    popped.setPrev(null);

    return popped;
  }

  pushLeft(newNode: DequeNode<T>): void {
    newNode.setNext(this.head);
    this.head.setPrev(newNode);
    this.head = newNode;
  }

  pushRight(newNode: DequeNode<T>): void {
    newNode.setPrev(this.tail);
    this.tail.setNext(newNode);
    this.tail = newNode;
  }
}
