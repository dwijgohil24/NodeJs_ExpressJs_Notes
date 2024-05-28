//Four types of globals (anywhere in our application we can use this.)

// __dirname - path to current directory
// __filename - file name
// require - function to use modules
// module - info about the current module
// process - infor about the env where the program is being executed. ( very important, because gives the info about the env. where program is executed. )

//There is no window in Node-Js, since node js is enviornment to execute javascript outside browser.

//Examples:

console.log(__dirname); //gives the name of the current directory where this file is executed.
console.log(__filename); //gives the full path to the current file 1_Global.js starting from the drive directory.