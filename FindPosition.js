//Find the position!
//When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    //Write your own Code!
    let abc = "0abcdefghijklmnopqrstuvwxyz"
    for(let i = 0;i<abc.length;i++){
      if(abc[i] == letter){
        return  'Position of alphabet: ' + i;
      }
    }
      
    }