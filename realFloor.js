function getRealFloor(n) {
    if(n == 0 || n == 1){
      return 0
    }
    else if(n == 13){
      return 12
    }
    else if(n > 13){
      return n - 2
    }
    else if(n < 0){
      return n
    }
    else{
      return n - 1
    }
  } 

//   second way of doing it

//   function floorNum(n){
//     return n > 13? n - 2: n > 0? n - 1:n;
//   }