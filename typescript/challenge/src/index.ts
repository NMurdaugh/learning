const numericArray: number[] = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]
// output [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
const answer = (array: any[]) => {
    interface frequencyOfNumbers {
        [key: number]: number
    }
    const counts: frequencyOfNumbers = {};
    for (const num of array) {
        counts[num] = (counts[num] | 0) + 1;
    };
    interface singleNumbersAndArrays {
        [key: number]: number | number[]
    }
    let finalNumbers: singleNumbersAndArrays = {...counts}
    // const sortedNumericArray: number[] = array.sort((n1: number, n2: number) => n1 - n2);
    // return sortedNumericArray


    // const doubleSortedArray: (number[] | number)[] = sortedNumericArray
};

answer(numericArray)