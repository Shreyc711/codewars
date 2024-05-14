function toNumberArray(str){
    return str.map(num => {
       if (num.includes('.')) {
           return parseFloat(num);
       } else {
           return parseInt(num, 10);
       }
   });
}