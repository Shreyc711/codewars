function minSum(arr) {
    arr = arr.sort(function (a, b) {return a - b});
    let i = 0;
    let j = arr.length - 1;
    let sum = 0;
    while (i < j ) {
      sum += arr[i] * arr[j];
      i++;
      j--;
    }
    return sum;
  }