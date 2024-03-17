//count the vowels
function getCount(str) {
    var cont = 0;
   
    var vow = ["a","e","i","o","u"];  
   for(var i =0;i<str.length;i++){
     for(var j = 0;j<vow.length;j++){
       if(str[i] === vow[j]){
         cont++
     }
    
     }
   }
    return cont;
   
  }
  
  