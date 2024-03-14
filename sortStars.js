function twoSort(arr) {
    arr.sort();
  
      // Select the first string
      let firstString = arr[0];
  
      // Insert "***" between each character of the first string
      let result = firstString.split('').join('***');
  
      return result;
  }