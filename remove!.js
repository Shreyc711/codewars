//remove ! from given str

function removeExclamationMarks(s) {
    // Split the string into an array of characters
    var arr = s.split("");
  
    // Iterate through the array and remove exclamation marks
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "!") {
        arr.splice(i, 1); // Use splice to remove the exclamation mark at index i
        i--; // Adjust the index to account for the removed element
      }
    }
  
    // Join the array back into a string and return
    return arr.join("");
  }