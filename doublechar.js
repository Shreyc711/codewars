//repeat every char in string

function doubleChar(str) {
    // Your code here
    let emp = '';
    for(let i = 0;i< str.length;i++){
      emp += str[i] + str[i];
    }
    return emp;
  }
  