function isPythagoreanTriple(integers) {
    // Good luck friends!
  var in0 = integers[0] * integers[0];
    var in1 = integers[1] * integers[1];
    var in2 = integers[2] * integers[2];
    
    if(in0 + in1 === in2){ //checks if sum of any two values equals the third
      return true//if it does, it return true. 
    }
    else if(in1 + in2 === in0){
      return true
    }
    
    else if(in2 + in0 === in1){
      return true
    }
    
    else { //else it return false
      return false
      }
  }