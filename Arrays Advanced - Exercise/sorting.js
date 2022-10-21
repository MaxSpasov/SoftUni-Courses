function sorting(arr) {

    let sortedArray = arr.sort((a, b) => a - b);
    let resultArray = [];
    let copyArray = sortedArray.slice(0);

    for(let index = 0; index < sortedArray.length; index++) {
        let lastElement = sortedArray.pop();
        let firstArray = sortedArray.shift();
        resultArray.push(lastElement);
        resultArray.push(firstArray);
    }
    resultArray.push(sortedArray.pop());
    resultArray.push(sortedArray.shift());

    console.log(resultArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])