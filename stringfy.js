const noBoringZeros = (n) => {
    if (n === 0) return 0;
    n = String(n).split('');
  
    for (let i = n.length - 1; i > 0; i--) {
      if (n[i] === '0') {
        n.pop();
      } else {
        return +n.join('');
      }
    }
  };