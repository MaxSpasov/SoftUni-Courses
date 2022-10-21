function distinctArray(arr) {

    let uniqueNumbersArray = [];
    let arrayLength = arr.length;

    for(let index = 0; index < arrayLength; index++) {
        if(!uniqueNumbersArray.includes(arr[index])) {
            uniqueNumbersArray.push(arr[index]);
        }
    }
    console.log(uniqueNumbersArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])