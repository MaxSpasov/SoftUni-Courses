function searchForANumber(nums, actions) {
    let numbersTotake = actions[0];
    let numbersToDelete = actions[1];
    let specialNumber = actions[2];
    let takenNumbers = nums.slice(0,numbersTotake);
    takenNumbers.splice(0,numbersToDelete,);

    let counter = 0;

    for (const number of takenNumbers) {
        if(number === specialNumber) {
            counter++;
        }    
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],[5, 2, 3])