// 1. PRIME NUMBERS

let filterPrime = (arr) => {
    let newArr = arr.filter((element, index) => {
        if (element == 2) {
            return true;
        }
        else if (element >= 2) {
            for (let j=2; j<element; j++){
                if (element % j == 0) {
                    break;
                } else {
                    return true;
                }
            }
        }
    })
    return newArr;
}

let numbersArray = [3, 6, 8, 2, 79, 32, 23, 29, 2, 67];
console.log(filterPrime(numbersArray));

// 2. ARRAY REVERSING

let reverseArray = (arr) => {
    let newArr = [];
    for (let i = arr.length -1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;

    // let newArr = arr.reverse();
}

let numbersReverse = [3, 6, 8, 2, 79, 32, 23, 29, 2, 67];
console.log(reverseArray(numbersReverse));

// 3. INPLACE REVERSING

let inplaceReverse = (arr) => {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        let temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

let numbersInplace = [3, 6, 8, 2, 79, 32, 23, 29, 2, 67];
console.log(inplaceReverse(numbersInplace));

// 4. NESTED OBJECT OF TWO ARRAYS

let sample = ["Patrick wyne, 30, male", "lil wyne, 32, male","Eric mimi, 21, female","Dodos deck, 21,male","Alian Dwine, 22, male","Patrick wyne, 33, male","Patrick wyne, 10,male","Patrick wyne, 40,male"];

let nestedObj = (arr) => {

    let males = [], females = [], nestedObj = {};

    arr.forEach((element) => {
        let tempArr = element.split(",");
        let name = tempArr[0].split(' ');
        let obj = {};
        obj.second_name = name[1];
        obj.age = tempArr[1];
        if (tempArr[2].trim() == 'male'){
            let str = '';
            for (let [key, value] of Object.entries(obj)){
                str += `${key}: ${value}, `;
            }
            males.push(`${name[0]}: {${str.trim()})}`);
        }
        else if (tempArr[2].trim() == 'female') {
            let str = '';
            for (let [key, value] of Object.entries(obj)){
                str += `${key}: ${value}, `;
            }
            females.push(`${name[0]}: {${str.trim()}}`);
        }
    });

    nestedObj.females = females;
    nestedObj.males = males;

    return nestedObj;
}

console.log(nestedObj(sample));
