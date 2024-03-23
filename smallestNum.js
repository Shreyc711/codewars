function sumTwoSmallestNumbers(numbers) {  
    //Code here  
  
   numbers.sort(compare);
   
   function compare(a,b) {
     return a-b;
   }
    
    return numbers[0] + numbers[1];
  
    
  };