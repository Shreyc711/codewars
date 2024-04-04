function isPowerOfTwo(n){
    //.. should return true or false ..
    if(n < 1){
      return false
    }
    else if(n == 1){
      return true
    }
    return isPowerOfTwo(n/2)
    
  }
  
  
   
  
  