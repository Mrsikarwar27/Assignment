// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = +prompt("Enter the age ");
// if(age>= 18){
//     console.log("Eligible ");

// }else{
// console.log("Not eligible");

// }


// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for(let i =1; i<=10; i++){
//     console.log(`5 * ${i} = ${5 * i}`);

// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// let count =0;
// for(let i = 1; i<=15; i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(count);


// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let correctPassword = "12345";
// let attempts = 3;

// for(let i =0 ; i<attempts; i++){
//     let userpass = prompt(`${i+1} enter the password`)
//     if(userpass === correctPassword){
//         console.log("Account accessed");
//         break;

//     }else if(i === attempts -1){
//       console.log("Account Locked");

//     }else{
//         console.log("plzz try again later");

//     }
// }

//2. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".


// let count =0;
// while(true){
//     let word = prompt("enter the word type stop to end")
//     if(word === "stop") break;
//     if(word === "yes")  count++
// }
// console.log("you type yes " + count+" times");

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let i =1; i<=50;i++){
//     if(i%7===0){
//         console.log(i)
//     }

// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum =0;
// for(let i =1;i<31;i++){
//     if(i%2 !==0){
//         sum += i;

//     }
// }
// console.log("The sum of oddNo:"+sum);


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// while(true){
//    let even = prompt("enter the number") 
//     if(even%2===0) break;



// }

//

// const marvel = ["ironman", "captainAmerica", "hulk"];
// const dc = ["batman", "superman", "flash"];

// const hero = [...marvel , ...dc]
// console.log(hero);
// const combinedHeroes = [1,3,45,[1,32,34,],44,3,4,[34]];
// const flattenedHeroes = combinedHeroes.flat(Infinity);
// console.log(flattenedHeroes);



// TODO:  cmd+shift+p = zenmode
// FIXME:

// const arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((num)=> {
//     console.log(num);
// });
