function removeUrlAnchor(url){
    // TODO: complete
  
    let str = "";
    
    for(let i = 0;i<url.length;i++){
      if(url[i] == "#"){
        break
      }
      str += url[i]
    }
    return str
    
    
  }
  