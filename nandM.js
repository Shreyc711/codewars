function sumMul(n,m){
    let res = 0
  for(let i = n; i < m; i++){
    if(i % n === 0)
      res += i
  }
    return res > 0 ? res : "INVALID"
  }