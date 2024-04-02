// learn - this keyword and arrow function 
// this keyword means current context 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function (username){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = " hitesh "
//     // console.log(this.username);     // undefine - // this keyword not work for function 
// }                                      


// chai()

const chai = (num1 , num2) => {
 let username = "hitesh"
 // console.log(this.username);  // undefined - yaha bhi function m this keyword not used 
}

// chai( 1 , 3)

// arrow function implicit declaration method 

// const addTwo = (num1 , num2) => num1 + num2
// console.log(addTwo(1,2));

// const addTwo =(num1 , num2) => (num1 + num2)
// console.log(addTwo(2,5));

// object pasing

const addTwo = (num1 , num2) => ({username: "hitesh"})

console.log(addTwo(1,3))




