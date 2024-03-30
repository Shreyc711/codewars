var uniqueInOrder=function(it){

    var arr = []
    
    
    for(let i = 0;i< it.length;i++){
      if(it[i] != it[i+1]){
         arr.push(it[i])
         }
      
    }
    return arr
      
      }