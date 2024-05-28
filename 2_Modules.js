//Module = encapsulated code , only share the minimum that is required.
//CommonJs, every file is a module by default.

const names = require('./3_SecondModule'); //imported the object that we have passed.

//console.log(names); //will gives us the object having the two variables that we exported.

const fetched_dwij = names.dwij; //fetched the particular variable data from the object into a local variable.
const fetched_tarun = names.tarun;

const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}

sayHi("Dwij");
sayHi(fetched_dwij); //usage of the fetched variable.
sayHi(fetched_tarun);