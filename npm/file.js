
import fs from 'fs';

// blocking code or sync..
// yeh kuch return krta hai 
// console.log("hii");

// const res =fs.readFileSync('./temp.txt','utf-8');
// console.log(res);

// console.log("byee");






// non - blocking code Async.. 
//note isme return nhi hota h , callback dete hai

// console.log("hii");

// fs.readFile('./temp.txt', 'utf-8',(_err,res)=>{
// console.log(res);
// });

// console.log("bye");