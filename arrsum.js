//return sum of positive numbers from array.
function positiveSum(arr) {
  
    let emp = [];
    let total=0;
      for(let i = 0;i<arr.length;i++){
        
        if(arr[i] > 0){
          emp.push(arr[i])
          
        }
      
    
      }

      for(let j = 0;j<emp.length;j++){
        total += emp[j]
        

      }
      return total;
      

      
      
    }
    positiveSum([1,2,3,-4,-4])