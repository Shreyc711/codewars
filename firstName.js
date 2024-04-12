function greet(name) {
    // Capitalize the first letter of the name and convert the rest to lowercase
    const capitalized_name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    // Greet the person with the capitalized name
   return "Hello " + capitalized_name + "!"
}