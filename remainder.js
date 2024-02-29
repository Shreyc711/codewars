//find the remainder by deviding bigger amount with smaller one

function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    
  let larger = Math.max(n,m)
  let smaller = Math.min(n,m)
  
  
  return larger % smaller
    
  
  }