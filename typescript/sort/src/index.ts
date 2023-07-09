import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([50, -5, 8, 37, 0]);
numbers.sort();
console.log(numbers);

const string = new CharactersCollection('VfRtA');
string.sort();
console.log(string);

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(45);
linkedList.add(0);
linkedList.add(-9);
linkedList.sort()
console.log(linkedList);