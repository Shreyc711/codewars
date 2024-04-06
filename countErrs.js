function printerError(s) {
    // your code
  let atom = ["a","b","c","d","e","f","g","h","i","j","k","l","m"];
  var errs = 0;
  for(let i = 0;i<s.length;i++){
   if(!atom.includes(s[i].toLowerCase())){
     errs += 1
   }
  }
  return errs +"/" +s.length
  
}