function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let currentDateObj = new Date(currentDate);
     let expirationDateObj = new Date(expirationDate);
     
     // Check if the entered code matches the correct code and if the current date is on or before the expiration date
     if (enteredCode === correctCode && currentDateObj <= expirationDateObj) {
       return true; // Coupon is valid
     } else {
       return false; // Coupon is invalid
     }
   }