function largestPairSum(numbers) {
    var [a, b] = numbers.sort((a, b) => b - a)
    return a + b
  }