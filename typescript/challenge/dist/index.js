"use strict";
const numericArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const answer = (array) => {
    const counts = {};
    for (const num of array) {
        counts[num] = (counts[num] | 0) + 1;
    }
    ;
    let finalNumbers = { ...counts };
    for (let [key, value] of Object.entries(finalNumbers)) {
        if (value > 1) {
            let arr = [];
            for (let step = 0; step < value; step++) {
                arr.push(key);
            }
            ;
            for (let num of arr)
                num = parseInt(num);
            value = arr;
        }
    }
    ;
    console.log(finalNumbers);
};
answer(numericArray);
//# sourceMappingURL=index.js.map