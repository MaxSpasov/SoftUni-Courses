function train(arr) {

    let passengersInTrain = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());
    let arrayLength = arr.length;
    for(let index = 0; index < arrayLength; index++ ) {
        let currentRow = arr[index].split(' ');

        if(currentRow[0] === 'Add') {
            let newWagonPassengers = Number(currentRow[1]);
            passengersInTrain.push(newWagonPassengers);
        }else{
            for(let j = 0; j < passengersInTrain.length; j++) {
                let passengersInCurrentWagon = passengersInTrain[j];
                if(passengersInCurrentWagon + Number(currentRow[0]) <= maxCapacity) {
                    passengersInTrain[j] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }
    console.log(passengersInTrain.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);