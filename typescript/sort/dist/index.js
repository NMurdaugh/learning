"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbers = new NumbersCollection_1.NumbersCollection([50, -5, 8, 37, 0]);
numbers.sort();
console.log(numbers);
const string = new CharactersCollection_1.CharactersCollection('VfRtA');
string.sort();
console.log(string);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(3);
linkedList.add(45);
linkedList.add(0);
linkedList.add(-9);
linkedList.sort();
linkedList.print();
//# sourceMappingURL=index.js.map