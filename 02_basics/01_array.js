// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array (1,2,3,4)
// console.log(myArr[1]);

// Array method 

myArr.push(6)
myArr.push(7)
myArr.pop()

// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);

myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(12)); // data type is boolean 
// console.log(myArr.indexOf(15));
// console.log(myArr.indexOf(4));

// console.log(myArr.join()); // convert to array to string 

// slice , splice 

console.log("A" , myArr);
console.log("B", myArr.slice(1,3)) // end not include 
console.log("c", myArr.splice(1,3)) // break in two array include end 
console.log(myArr) 

// to yaha hamne array ko smjha array m kitne bhi data type k element ho sakte h , array declaration dhekha ,
// array methods dhekhe like push , pop , shift , unshift , slice , splice 




