function solve(s){
  
    var upper = 0;
    var lower = 0;
      for(let i = 0;i<s.length;i++){
    if(s[i] == s[i].toUpperCase() ){
       upper++
    }
        else{
           lower++
        }
      }
    return upper > lower ? s.toUpperCase() :s.toLowerCase()
  }
  
  