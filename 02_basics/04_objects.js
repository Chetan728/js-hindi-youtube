// learning - skeloton , literal ,, Object.assign() , ... ,,  keys , value , entries , hasOwnProperty  
// const tinderUser = new Object() // skeloton 

const tinderUser = {}
 
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedIn= false

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userFullname: {
            firstname: "hitesh",
            lastname: "choudhary",
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 ={obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3={...obj1 , ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));







