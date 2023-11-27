//Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
    //#Happy Coding! ^_^
    let hr = (h * 3600) * 1000;
    let mt = (m * 60)*1000;
    let sc = s * 1000;
    
  return hr + mt + sc
    
    
  }
  