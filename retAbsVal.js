function closeCompare(a, b, m = 0){
    return Math.abs(a - b) <= m? 0: Math.sign(a - b);
  }