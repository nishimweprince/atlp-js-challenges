// <---- FEBRUARY 08 2023 SESSION ---->

// 1. MAP FUNCTION 

// 1.1. MAP FUNCTION - EXERCISE 1
let multiplyByTwo = (arr) => {
    let newArr = arr.map((num) => {
        return num * 2;
    });
    return newArr;
}

let array = [1, 2, 3, 4, 5];
console.log(multiplyByTwo(array));

// 1.2. MAP FUNCTION - EXERCISE 2
let transformToUppercase = (arr) => {

    let newArr = arr.map((str) => {
        return str.toUpperCase();
    });
    return newArr;
}

let str = ['this', 'is', 'the', 'inception'];
console.log(transformToUppercase(str));


// 2. FILTER FUNCTION 

// 2.1. FILTER FUNCTION - EXERCISE 1

let filterEvenNumbers = (arr) => {
    let newArr = arr.filter((num) => {
        return num % 2 === 0;
    });
    return newArr;
}

let numbersArray = [3, 6, 8, 2, 79, 32];
console.log(filterEvenNumbers(numbersArray));

// 2.2. FILTER FUNCTION - EXERCISE 2

let filterObjects = (arr) => {
    let newArr = arr.filter((obj) => {
        return obj.active == true;
    });
    return newArr;
}

let arrayOfObjects = [
    { name: 'Nishimwe', active: true },
    { name: 'Ken', active: false },
    { name: 'Gad', active: true },
    { name: 'John', active: false },
    { name: 'Bryan', active: true },
    { name: 'Prince', active: false }
];

console.log(filterObjects(arrayOfObjects));

// 3. SORT FUNCTION 

// 3.1. SORT FUNCTION - EXERCISE 1
let sortAscending = (arr) => {
    let newArr = arr.sort((a, b) => {
        return a - b;
    });
    return newArr;
}

let numbersSort = [3, 8, 6, 2, 79, 32];
console.log(sortAscending(numbersSort));

// 3.2. SORT FUNCTION - EXERCISE 2
let sortObjects = (arr) => {
    let newArr = arr.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    return newArr;
}

console.log(sortObjects(arrayOfObjects));

// 3. FIND FUNCTION

// 3.1. FIND FUNCTION - EXERCISE 1
let findMultiplesofSeven = (arr) => {
    let newArr = arr.find((num) => {
        return num % 7 === 0;
    });
    return newArr;
}

let numbersFind = [3, 8, 14, 2, 34, 32, 49];
console.log(findMultiplesofSeven(numbersFind));

// 3.2. FIND FUNCTION - EXERCISE 2
let findObjectProperty = (arr, value) => {
    let newArr = arr.find((obj, index) => {
        if (Object.keys(obj).includes(value)) return arr[index];
    });
    return newArr;
}

console.log(findObjectProperty(arrayOfObjects, 'name'));