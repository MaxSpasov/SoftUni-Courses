function addAndSubstract(firstNumber, secondNumber, lastNumber) {
    function add(a, b) {
        let sumOfTwoNumbers = a + b;
        return sumOfTwoNumbers;
    }
    let sum = add(firstNumber, secondNumber);

    function subtract(sumOfTwo, lastNum) {
        return sumOfTwo - lastNum;
    }
    let result = subtract(sum, lastNumber);
    console.log(result);
}
addAndSubstract(23, 6, 10)