function twoHighest(arr) {
    let a = [...new Set(arr)];
    return a.length != 0 ? a.sort((a, b)=> b -a).slice(0, 2) : []
  }