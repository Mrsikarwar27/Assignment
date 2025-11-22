
const arr = [1, 2, 3,4,5];
// error .forEach() function does not exsist in a arr variable

// signature -- return kuch nhi krta h , userfun index, value leta h 
// calls my every fn value 

//    const ret = arr.forEach(function(value, index){
//         console.log(`value at index ${index} is ${value} `);
//     })
// console.log(ret);

// forEach ke liye polyfill

// if (!Array.prototype.ForEach){
//     Array.prototype.ForEach = function(userfn){
//         const original = this;
//         for( let i =0; i<original.length; i++){
//             userfn(original[i], i)
//         }
//     }
// }

// ye hogya h mera banaya huaa fn 
//   const res = arr.ForEach(function(value, index){
//         console.log(`value at index ${index} is ${value} `);
//     })
// console.log(res);



// filter ke liye polyfill

// if(!Array.prototype.myfilter){
//     Array.prototype.myfilter = function(userfn){
       
//         const newarr = [];
//         for(let i =0; i< this.length; i++){
//          if(userfn(this[i])){
//             newarr.push(this[i])
//          }
//         }
  
//         return newarr;
// }

// }

// ye hai filter ke liye polyfill
// signature -- return naya array deta h , userfun true/false leta h
const n1 = arr.myfilter((n) => n %2 ==0)
console.log(n1);
