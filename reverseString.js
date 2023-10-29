//Reversed Strings
//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

function solution(str) {
    //first i will split the string.
    
    var spl = str.split("");
    
    //then i will reverse the string that we split.
    var rev = spl.reverse("");
    
    //now we will rejoin the reversed string
    var joi = rev.join("");
    
    return joi;
    
    
    }
  
   
  solution("hello");