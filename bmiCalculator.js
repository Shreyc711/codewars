//count BMI and categories them according to their BMI
function bmi(weight, height) {
    height = height * height;
    let total = weight / height;
    let info;
    switch(true){
        case total <= 18.5:
       info = 'Underweight';
        break;
        case total <= 25.0:
        info = "Normal";
        break;
        case total <= 30.0:
        info = "Overweight";
        break;
        case total > 30:
         info ="Obese" ;
        break;
    }
    return info;
    
    
  }