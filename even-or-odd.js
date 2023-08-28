//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    var nu = (number % 2)
    if (nu === 0){
      return "Even"
    } else {
        return "Odd" 
    }
  }
  even_or_odd(5)