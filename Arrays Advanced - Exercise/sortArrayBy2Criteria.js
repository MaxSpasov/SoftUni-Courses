function sortArrayBy2Criteria(arr) {

    let sortedArray = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    sortedArray.forEach(element => {
       console.log(element); 
    });
}
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])