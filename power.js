function numberToPower(number, power) {
    if (power === 0) {
        return 1; // Any number to the power of 0 is 1
    }
    
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}
