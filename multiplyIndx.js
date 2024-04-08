function multipleOfIndex(array) {
    return array.filter((x, i) => {
      return x%i == 0 || x==0
    })
  }