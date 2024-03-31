// singleton 
// Object.create

// object literals 

const mySym = Symbol("key1")

const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh chodhary",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log( typeof jsUser[mySym]); // data type is coming string 
// console.log(Object.getOwnPropertySymbols(jsUser)) // return array of all symbol datatypes value

jsUser.email="hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email="hitesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// abhi maine simple object ko declare krna sheekha and uske key value ko excess krna sheekha , key by default vo string manta h
// nahi to ham define kar sakte h
// learn - freez , this. , symbol acces , differen object properties excess methods 
// puri javaScript m Objects and Events par command hasil kar lo , isase Puri javaScript master ho jaaygi 
