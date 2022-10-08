function maxNumber(arr) {
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isBigger = true;
        let currentNumber = arr[i];
        for (let k = i + 1; k < arr.length; k++) {
            if (currentNumber <= arr[k]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            resultArray.push(arr[i]);
        }
    }
console.log(resultArray.join(' '));
}
maxNumber([1, 4, 3, 2])