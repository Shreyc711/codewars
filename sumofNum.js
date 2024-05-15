const sequenceSum = (begin, end, step) => {
    // May the Force be with you
        if (begin > end) {
          return 0;
      } else {
          // Calculate the number of terms in the sequence
          var numTerms = Math.floor((end - begin) / step) + 1;
          
          // Calculate the sum of the sequence
          var sequenceSum = (begin + begin + (numTerms - 1) * step) * numTerms / 2;
          
          return sequenceSum;
      }
  
  };