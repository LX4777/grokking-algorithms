import { DequeNode } from "./DequeNode";

export class Deque<T> {
  private head: DequeNode<T> | null = null;
  private current: DequeNode<T> | null = null; // maybe should delete
  private tail: DequeNode<T> | null = null;

  constructor(head: DequeNode<T> | T[]) {
    if (head instanceof DequeNode) {
      this.head = head;
      this.current = head;

      let temp: DequeNode<T> | null = head;
      while (temp && temp.getNext() !== null) {
        temp = temp.getNext();
      }

      this.tail = temp;

      return;
    }

    if (Array.isArray(head)) {
      if (head.length === 0) {
        this.head = null;
        this.current = null;
        this.tail = null;

        return;
      }

      head.forEach((el) => this.pushRight(new DequeNode(el)));
      return;
    }
  }

  getHead(): DequeNode<T> | null {
    return this.head;
  }

  getTail(): DequeNode<T> | null {
    return this.tail;
  }

  resetCurrent(): void {
    this.current = this.head;
  }

  getCurrent(): DequeNode<T> | null {
    return this.current;
  }

  next(): void {
    if (this.current && this.current.getNext() !== null) {
      this.current = this.current.getNext();
    }
  }

  prev(): void {
    if (this.current && this.current.getPrev() !== null) {
      this.current = this.current.getPrev();
    }
  }

  shift(): DequeNode<T> | null {
    if (this.head === null) {
      return null;
    }

    let popped = this.head;
    this.head = this.head.getNext();

    if (this.head !== null) {
      this.head.setPrev(null);
    }

    popped.setNext(null);

    return popped;
  }

  pop(): DequeNode<T> | null {
    if (this.tail === null) {
      return null;
    }

    const popped = this.tail;
    this.tail = this.tail.getPrev();
    if (this.tail !== null) {
      this.tail.setNext(null);
    }
    popped.setPrev(null);

    return popped;
  }

  pushLeft(newNode: DequeNode<T>): void {
    newNode.setNext(this.head);
    if (this.head !== null) {
      this.head.setPrev(newNode);
    }
    this.head = newNode;

    if (this.tail === null) {
      this.tail = this.head;
    }
  }

  pushRight(newNode: DequeNode<T>): void {
    newNode.setPrev(this.tail);
    if (this.tail !== null) {
      this.tail.setNext(newNode);
    }
    this.tail = newNode;

    if (this.head === null) {
      this.head = this.tail;
    }
  }

  pushRightFromArray(array: T[]): void {
    array.forEach((el) => this.pushRight(new DequeNode<T>(el)));
  }

  toArray(): T[] {
    if (this.head === null) {
      return [];
    }

    let pointer: DequeNode<T> | null = this.head;
    let result: T[] = [];

    while (pointer !== null) {
      result.push(pointer.getVal());
      pointer = pointer.getNext();
    }

    return result;
  }
}
