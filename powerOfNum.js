function multiply(number){
    let power = number.toString().length;
    if(number < 0){
        power -= 1;
    }
    
    return number * (5 ** power);
}