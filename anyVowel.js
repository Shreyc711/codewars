function isVow(a){
    const vowelCodes = {
          97: 'a',  // 'a'
          101: 'e', // 'e'
          105: 'i', // 'i'
          111: 'o', // 'o'
          117: 'u'  // 'u'
      };
  
      // Use map to iterate over the array and replace vowel codes with the corresponding vowel character
      return a.map(num => vowelCodes[num] || num);
  
  
  }