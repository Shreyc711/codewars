//Given a number as an input, print out every integer from 1 to that number. However, 
//when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.


function que(num){

    for(let i = 0;i < num.length;i++){


        if(num[i] % 3 == 0 && num[i] % 5 == 0 ){
            console.log("Fizz Buzz" +" "+ i)
        }
        else if(num[i] % 3 == 0){
            console.log("fizz" +" "+ i)
        }
        else if(num[i] % 5 == 0){
            console.log("Buzz" +" "+ i)
        }
        else {
            console.log("none")
        }

    }

}

que([3,4,5,6,7,8,9,0]);