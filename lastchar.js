//if last character of string is "!" remove it.

function remove(string) {
    //coding and coding....
    if(string.slice(-1) === "!"){
      return string.slice(0,-1)
    }
    return string;
  }