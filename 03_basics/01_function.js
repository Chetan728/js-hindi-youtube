// function declaration - 2 , handle return 
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    // console.log(number1+number2);
    let result = number1+number2
    return result;
}

   const result = addTwoNumbers(1,2)

// console.log( "Result: " , result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter the user name")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("hitesh"));

// passing object in function 

function calculateCartPrice(value1, value2 , ...num1){
    return num1
}                                                          // ... spread method - make array of values

// console.log(calculateCartPrice(100, 200, 300, 400, 500));


const user = {
    username: "hitesh",
    price: 399
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user)

// direct object passing 

handleObject({
    username: "hitesh",
    price: 399
})


// array 

const myNewArray = [200, 400, 100, 600]

function returnArray(array){
    console.log(array[2]);
}

// returnArray(myNewArray)

returnArray([100 , 200 ,300])

// function , passing object , array in function , ... ( split method ), and different concepts 


