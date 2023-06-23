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