// immediately Invoked Function Expression (IIFE) 
/* iife - They are typically used to create a local scope
 for variables to prevent them from polluting the global scope. */

 (function chai(){
    // name iife
    console.log(`DB Connected`)
 })();                                     // ()()

(
    (name) => {
        console.log(`db connected ${name}`);
    }
) ('chetan')