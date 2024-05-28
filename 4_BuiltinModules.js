//+++++++++ 1. OS Module +++++++++++++++++++++++++++++++++

// const os = require('os'); //since builtin module therefore no need to write the path like ./

// //info about the current user.
// const user = os.userInfo(); // gives the user info like uid, gid, username, homedir etc.
// console.log(user);

// //to return the system uptime in seconds.
// console.log(`The system uptime is ${os.uptime()} seconds.`)

// const currentOS={
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// };

// console.log(currentOS);

//+++++++++++++++++++++ 2. Path Module ++++++++++++++++++++++

// const path = require('path')

// console.log(path.sep); //gives the separator by which path is seperated like "\" or "/"

//const filepath = path.join('/content', 'subfolder', 'subtext.txt'); // use to join the path of the directory with the path of the file present in the subfolder mentioned.
//console.log(filepath);

//const base = path.basename(filepath) // give the basename i.e. name of the file present in the subfolder.

//+++++++++++++++++++++ 3. File Module +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Method : 1 - Synchronous Method (Blocking approach, next line want start the execution until the current line execution completes.)

// const { readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/subfolder/first.txt', 'utf-8');
// const second = readFileSync('./content/subfolder/second.txt', 'utf-8');

// console.log(first, second);

// writeFileSync('./content/result.txt',  `Here is the result : ${first}, ${second}`);

// Method - 2 : Asynchronous Method (Non-blocking approach, if something is taking time then the control will move to the next excutable statement and parallely execute them while the time taking thing is being executed.)
//Here we have used callback method, which is bit messy, in order to implement much simpler way we can use promises.

// const { readFile, writeFile } = require("fs");

// readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/subfolder/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;

//     writeFile(
//       "./content/subfolder/result-async.txt",
//       `Here is the result : ${first} and ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(
//           "Everything went well, please check your result-async.txt file for the output"
//         );
//       }
//     );
//   });
// });

//---------------------------------------- 4. HTTP Module ----------------------------------------------------------

const http = require('http');

const server = http.createServer( (req, res) =>{
    res.write("Hello this is our first homepage");
    res.end();
})

server.listen(5000);