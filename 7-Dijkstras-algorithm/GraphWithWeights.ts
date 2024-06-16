export class NodeWithWeight<NodeType, WeightType> {
  weight: WeightType;
  node: NodeType;

  constructor(weight: WeightType, node: NodeType) {
    this.weight = weight;
    this.node = node;
  }

  getWeight(): WeightType {
    return this.weight;
  }

  getNode(): NodeType {
    return this.node;
  }
}

export class GraphWithWeights<ValueType, WeightType> {
  private val: ValueType;
  private next: NodeWithWeight<
    GraphWithWeights<ValueType, WeightType>,
    WeightType
  >[];

  constructor(
    val: ValueType,
    next: NodeWithWeight<
      GraphWithWeights<ValueType, WeightType>,
      WeightType
    >[] = []
  ) {
    this.val = val;
    this.next = next;
  }

  getVal(): ValueType {
    return this.val;
  }

  setVal(val: ValueType): void {
    this.val = val;
  }

  getNext<U extends boolean>(
    toArray: U
  ): U extends true
    ? ValueType[]
    : NodeWithWeight<GraphWithWeights<ValueType, WeightType>, WeightType>[] {
    return (
      toArray && Array.isArray(this.next)
        ? this.next.map((el) => el)
        : this.next
    ) as U extends true
      ? ValueType[]
      : NodeWithWeight<GraphWithWeights<ValueType, WeightType>, WeightType>[];
  }

  setNext(
    next: NodeWithWeight<GraphWithWeights<ValueType, WeightType>, WeightType>[]
  ): void {
    this.next = next;
  }

  pushNext(
    graph: NodeWithWeight<GraphWithWeights<ValueType, WeightType>, WeightType>
  ): void {
    this.next.push(graph);
  }

  delete(index: number): void {
    this.next.splice(index, 1);
  }
}
