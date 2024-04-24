function alphabetPosition(text) {
    // Define an empty string to store the result
    let result = "";

    // Convert the input text to lowercase to handle both uppercase and lowercase letters
    const lowerText = text.toLowerCase();

    // Iterate over each character in the text
    for (let i = 0; i < lowerText.length; i++) {
        const char = lowerText[i];
        
        // Check if the character is a letter
        if (/[a-z]/.test(char)) {
            // Calculate the position of the letter in the alphabet (a=1, b=2, ..., z=26)
            const position = char.charCodeAt(0) - 96;
            // Append the position to the result string
            result += position + " ";
        }
    }

    // Remove the trailing space and return the result
    return result.trim();
}

// Example usage
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// Output: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
