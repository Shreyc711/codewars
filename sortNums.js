var FilterString = function (value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
}