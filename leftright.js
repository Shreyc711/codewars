function alphabetWar(fight){
    let left = 0;
    let right = 0;
    let str = fight.split("");
    for( let i = 0 ; i < str.length; i++) {
     switch(str[i]){
      case "w" : left += 4;
         break;
      case "p" : left +=3;
         break;
      case "b" : left +=2;
         break;
      case "s" : left++;
         break;
      case "m" : right +=4;
         break;
      case "q" : right +=3;
         break;
      case "d" : right +=2;
         break;
     case "z" : right ++;
         break;
         }
      }
    if( left > right ){ return "Left side wins!"}
    else if( right > left){ return "Right side wins!"}
    else { return "Let's fight again!"};
    }