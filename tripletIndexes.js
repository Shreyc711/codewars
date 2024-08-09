function gimme(triplet) {
    // Directly access elements
    const a = triplet[0];
    const b = triplet[1];
    const c = triplet[2];
  
    // Determine the middle value by comparison
    if ((a > b && a < c) || (a < b && a > c)) {
      return triplet.indexOf(a);
    } else if ((b > a && b < c) || (b < a && b > c)) {
      return triplet.indexOf(b);
    } else {
      return triplet.indexOf(c);
    }
  }