//Implementation of exporting the module and its content.

//local
const secret = 'secret';

//sharable
const dwij = 'dwij';
const tarun = 'tarun';

//console.log(module); // will give us the object very imp. as it helps in knowing all the usable properties of the module.

module.exports = {dwij, tarun}; //exporting the two variables in one object format.

//If we have to export single thing we can directly write module.exports = sayHi , considering it is one function that we have to export.

//Different flavours of exporting

// module.exports.items = ['item1', 'item2'];
// const person = {
//     name: 'Dwij';
// }

// module.exports.OnePerson = person;

//when we export some file and import it in the other, if there is any function written in the previous file it will be executed.

//Built-In Modules in Node

//1. OS
//2. Path
//3. FS
//4. HTTP