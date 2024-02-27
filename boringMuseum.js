function removeSmallest(numbers) {
    numbers = numbers.slice(0)
      let min = Math.min(...numbers)
     numbers.splice(numbers.indexOf(min),1)
      return numbers
    }
    