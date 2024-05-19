function findNextSquare(sq) {
    let root = Math.sqrt(sq);
   
   // Check if the root is an integer
   if (Number.isInteger(root)) {
     // If so, return the square of the next integer
     let nextRoot = root + 1;
     return nextRoot * nextRoot;
   } else {
     // If not, return -1
     return -1;
   }
 }