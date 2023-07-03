"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    ;
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i + 1) {
            for (let j = 0; j < length - i - 1; j + 1) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftSide = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftSide;
                }
            }
        }
    }
    ;
}
//# sourceMappingURL=index.js.map