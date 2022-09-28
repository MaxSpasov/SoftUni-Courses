function poundsToDollars (pounds) {
    const poundValue = 1.31;
    let poundsToDolars = pounds * poundValue;
    
    console.log(poundsToDolars.toFixed(3));
}
poundsToDollars(80)