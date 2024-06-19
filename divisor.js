function getDivisorsCnt(n) {
    // todo
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            // If i is a divisor, n / i is also a divisor
            if (i === n / i) {
                count += 1;
            } else {
                count += 2;
            }
        }
    }
    return count;

}