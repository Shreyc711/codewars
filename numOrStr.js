function getNumberFromString(str) {
 
    let number = 0;
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) { // Check if character is a digit
            number = number * 10 + (charCode - 48); // Convert character to digit
        }
    }
    return number;

  
  }