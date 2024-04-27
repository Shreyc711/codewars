function arrayDiff(a, b) {
    var nA= [];
     
     a.forEach((i)=>{
      if(!b.includes(i)){
        nA.push(i)
      }
     })
     return nA
   }