//Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {
    const lowerCaseParam = param.toLowerCase();
  
    switch (lowerCaseParam) {
      case "jabroni":
        return "Patron Tequila";
      case "school counselor":
        return "Anything with Alcohol";
      case "programmer":
        return "Hipster Craft Beer";
      case "bike gang member":
        return "Moonshine";
      case "rapper":
        return "Cristal";
      case "politician":
        return "Your tax dollars";
      default:
        return "Beer";
    }
  }