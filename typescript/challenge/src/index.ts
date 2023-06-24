// question 1
const numericArray: number[] = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]
// output [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
const answer = (array: number[]) => {
    // make obj to store numbers and their counts
    interface frequencyOfNumbers {
        [key: number]: number
    }
    const counts: frequencyOfNumbers = {} as frequencyOfNumbers;

    // count each different item in the array and make it a key/value pair; will auto sort ascending
    for (const num of array) counts[num] = (counts[num] | 0) + 1;

    // clone counts obj to a new obj that stores both numbers and arrays of numbers
    interface singleNumbersAndArrays {
        [key: number]: number | number[]
    }
    let finalNumbers: singleNumbersAndArrays = {...counts}

    // create the final array; holds numbers and arrays of numbers
    let finalArray: (number[] | number)[] = []

    // loop through each value
    for ( let [key, value] of Object.entries(finalNumbers)) {
        // check if number occurs more than once
        if (value > 1) { 
            // if yes, create array to store number
            let arr: any[] = [];
            // push number to array number of times equal to count
            for (let step = 0; step < value; step++) arr.push(key);
            // convert strings to numbers 
            for (let num of arr) num = parseInt(num);
            // assign array to value
            value = arr
            // if number only occurs once, assign number to value; makes the final assignment to array easier
        } else value = parseInt(key);
        // push all values to final array
        finalArray.push(value)
    }
    return finalArray
};

console.log(answer(numericArray))


// question 2
const answer2 = (array: number[], num: number) => {
    interface numObj {
        [key: number]: boolean
    }
    let factorObj = {} as numObj
    let testNum: number;
    for (const n of array) {
        testNum = num - n;
        if (factorObj[testNum]) {
            // return true
            let factorArray: number[] = [];
            factorArray.push(testNum)
            factorArray.push(n)
            return factorArray
        } else {
            factorObj[n] = true
        }
    }
    return "Factors not present"
}

console.log(answer2([5, 4, 9, 3], 7));
console.log(answer2([5, 4, 9, 3], 6));


// question 3
const rgbHexConvert = (color: string | number[]) => {
    switch (typeof(color)) {
        case 'string':
            if (color.length != 6) {
                throw "Enter a full 6 digit hex color code."
            }
            const rgbHex: RegExpMatchArray | null = color.match(/.{1,2}/g)
            const rgb: number[] = [
                parseInt(rgbHex![0], 16),
                parseInt(rgbHex![1], 16),
                parseInt(rgbHex![2], 16)
            ]
            return rgb;
        case 'object':
            if (color.length != 3) {
                throw 'Enter a full RGB code.'
            }
            let hex: string = ''
            for (const hue of color) {
                
                hex + hue.toString(16).padStart(2, '0')
            }
            return hex;
        default:
            throw 'Enter a valid hex code or RGB code.'
    }
}

// console.log(rgbHexConvert('1502BE'))
console.log(rgbHexConvert([21, 2, 190]))