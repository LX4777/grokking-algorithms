import { Deque } from "./Deque";
import { Graph } from "./Graph";

let arr = [0, 1, 4, 6];

let deque = new Deque<number>(arr);

console.log(deque.toArray());

type Person = {
  name: string;
  seller: boolean;
};

function findSellerBlock() {
  function newPerson(name: string, seller: boolean) {
    return new Graph<Person>({
      name,
      seller,
    });
  }

  const you = newPerson("You", false);
  const bob = newPerson("Bob", false);
  const claire = newPerson("Claire", false);
  const alisa = newPerson("Alisa", false);
  const anuj = newPerson("Anuj", false);
  const tom = newPerson("Tom", false);
  const johny = newPerson("Johny", false);
  const peggy = newPerson("Peggy", false);

  claire.setNext([tom, johny]);
  bob.setNext([peggy, anuj]);
  alisa.setNext([peggy]);
  you.setNext([claire, bob, alisa]);

  function findSeller(graph: Graph<Person>) {
    let deque: Deque<Graph<Person>> = new Deque(graph.getNext(false));

    while (deque.getHead()) {
      const person = deque.shift();
      const graphVal: Graph<Person> | undefined = person?.getVal();

      if (graphVal) {
        if (graphVal.getVal().seller) {
          return `${graphVal.getVal().name} is a seller`;
        } else {
          let next = graphVal.getNext(false);
          if (Array.isArray(next)) {
            deque.pushRightFromArray(next);
          }
        }
      }
    }

    return "There are no sellers";
  }

  console.log(findSeller(you));
}

findSellerBlock();
