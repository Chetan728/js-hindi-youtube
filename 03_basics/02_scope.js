// global scope and scope 
let a= 1
const b= 2
var c = 3

if(true){
    let a= 10
const b= 11
var c = 12
}

// console.log(a);
// console.log(b);
// console.log(c); // c=12 var m yahi dikkat h k scope concept ko nahi samjhata 

// nested function 

function one() {
    const username ="hitesh"
    
    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website);

    two()
} 

 // one()

 // nested if else and understanding scope concepts 

 if(true){
    const username= " hitesh"
    if(username === " hitesh"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) //  not defined - scope concepts 
 }

//  console.log(username); // not defined - scope concepts 

// function declaration error 

console.log(addone(5));
// console.log(addtwo(6)); // error - can not excess addtwo() before intialisation 

function addone(num){
    return num+1
}
 

const addtwo = function (num){
    return num + 2
}

console.log(addtwo(6));
