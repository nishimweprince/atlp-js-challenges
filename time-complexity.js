// 1. MAJORITY ELEMENT

let majorityElement = (arr) => {
    let count = 0, newCount = 0;
    let majority = arr[0];

    arr.forEach((element, index) => {
        for (let key in arr) {
            if (key == element) {
                newCount++;
            }
        }
        if (newCount > count) {
            count = newCount;
            majority = element;
        }
    });

    console.log(count, newCount);

    return majority;
}

let numbersMajority =  [2,3,1,3,4,4,5,3,5,3,3,3,6,3];
console.log(majorityElement(numbersMajority));