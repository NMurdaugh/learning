"use strict";
const numericArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const answer = (array) => {
    const counts = {};
    for (const num of array) {
        counts[num] = (counts[num] | 0) + 1;
    }
    ;
    let finalNumbers = { ...counts };
};
answer(numericArray);
//# sourceMappingURL=index.js.map