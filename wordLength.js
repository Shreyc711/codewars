function addLength(str) {
    //start-here
      
      var res = [];
    var result = str.split(" ");
      for(let i = 0;i<result.length;i++){
        res.push(result[i] +" "+ result[i].length)
      }
    
        
    
      
      return result;
      
    }