function order(input) {
    if (!input) return "";
  
    // Split the input string into words
    let words = input.split(" ");
    
    // Sort the words based on the embedded number
    words.sort((a, b) => {
      let numA = a.match(/\d/)[0]; // Extract the number from word a
      let numB = b.match(/\d/)[0]; // Extract the number from word b
      return numA - numB;
    });
    
    // Join the sorted words into a single string
    return words.join(" ");
  }