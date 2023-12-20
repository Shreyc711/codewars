//Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
      return [];
    }
  
    let countPositives = 0;
    let sumNegatives = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPositives++;
      } else if (input[i] < 0) {
        sumNegatives += input[i];
      }
    }
  
    return [countPositives, sumNegatives];
  }
  
  // Example usage:
  const result = countPositivesSumNegatives([1, -2, 3, 4, 0]);
  console.log(result); // Output: [3, -2]
  