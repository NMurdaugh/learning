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
    let factorObj = {};
    let testNum;
    for (const n of array) {
        testNum = num - n;
        if (factorObj[testNum]) {
            let factorArray = [];
            factorArray.push(testNum);
            factorArray.push(n);
            return factorArray;
        }
        else {
            factorObj[n] = true;
        }
    }
    return "Factors not present";
};
console.log(answer2([5, 4, 9, 3], 7));
console.log(answer2([5, 4, 9, 3], 6));
const rgbHexConvert = (color) => {
    switch (typeof (color)) {
        case 'string':
            if (color.length != 6) {
                throw "Enter a full 6 digit hex color code.";
            }
            const rgbHex = color.match(/.{1,2}/g);
            const rgb = [
                parseInt(rgbHex[0], 16),
                parseInt(rgbHex[1], 16),
                parseInt(rgbHex[2], 16)
            ];
            return rgb;
        case 'object':
            if (color.length != 3) {
                throw 'Enter a full RGB code.';
            }
            let hex = '';
            for (const hue of color) {
                hex + hue.toString(16).padStart(2, '0');
            }
            return hex;
        default:
            throw 'Enter a valid hex code or RGB code.';
    }
};
console.log(rgbHexConvert([21, 2, 190]));
//# sourceMappingURL=index.js.map