"use strict";
const numericArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const answer = (array) => {
    const counts = {};
    for (const num of array)
        counts[num] = (counts[num] | 0) + 1;
    let finalNumbers = { ...counts };
    let finalArray = [];
    for (let [key, value] of Object.entries(finalNumbers)) {
        if (value > 1) {
            let arr = [];
            for (let step = 0; step < value; step++)
                arr.push(key);
            for (let num of arr)
                num = parseInt(num);
            value = arr;
        }
        else
            value = parseInt(key);
        finalArray.push(value);
    }
    return finalArray;
};
console.log(answer(numericArray));
const answer2 = (array, num) => {
    for (const n of array) {
        const testNum = num - n;
        array.slice(array.indexOf(n));
        if (array.includes(testNum)) {
            const answerArray = [n, array[array.indexOf(testNum)]];
            return answerArray;
        }
    }
    return "Factors not present";
};
console.log(answer2([5, 4, 9, 3], 7));
console.log(answer2([5, 4, 9, 3], 6));
//# sourceMappingURL=index.js.map