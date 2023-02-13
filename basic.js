// 1. PRIME NUMBERS

let filterPrime = (arr) => {
    let newArr = [];

    for (let i=0; i<arr.length; i++){
        if (arr[i] == 2) {
            newArr.push(arr[i]);
        }
        else if (arr[i] >= 2) {
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

// 2. PALINDROME

let isPalindrome = (str) => {
    let length = str.length;
    let j = length - 1, i = 0;

    while (i<j) {

        if (str[i] != str[j]) {
            return false;
            break;
        }

        i++;
        j--;

    }

    return true;
}

let str = 'racecare';

console.log(isPalindrome(str));