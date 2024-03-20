function noOdds( values ){
    // Return all non-odd values
    
  var noOdd = [];
    
    for(var i = 0;i<values.length;i++){
      if(values[i]%2 == 0){
        noOdd.push(values[i])
      }
    }
    return noOdd;
  }
  
  
  