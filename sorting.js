// 1. CUSTOM SORTING

let customSorting = (arr) => {
    let newArr = [];
    let isPrime = (num) => {
        if (num == 2) {
            return true;
        }
        else if (num >= 2) {
            for (let j=2; j<num; j++){
                if (num % j == 0) {
                    return false;
                    break;
                } else {
                    return true;
                }
            }
        }
    }

    for (let i=arr.length-1; i>=0; i--) {
        if (isPrime(arr[i])){
            arr = arr.filter(e => e!==arr[i]);
            continue;
        }
        else {
            newArr.push(arr[i]);
        };
    }

    console.log(isPrime(67));

    return newArr;

}

let numbersArray = [3, 6, 8, 2, 79, 32, 23, 29, 2, 67];
console.log(customSorting(numbersArray));