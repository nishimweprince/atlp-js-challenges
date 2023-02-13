// 1. PRIME NUMBERS

let filterPrime = (arr) => {
    let newArr = [];

    for (let i=0; i<arr.length; i++){
        if (arr[i] > 1) {
            for (let j=2; j<arr[i]; j++){
                if (arr[i] % j == 0) {
                    break;
                } else {
                    newArr.push(arr[i]);
                    break;
                }
            }
        }
    }

    return newArr;
}

let numbersArray = [3, 6, 8, 2, 79, 32, 23, 29, 2, 67];

console.log(filterPrime(numbersArray));