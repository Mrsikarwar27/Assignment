// singleton object

// object literal syntax

const  mySym = Symbol("key1")
const jsUser = 
    {
    
     "name " : "vijay", //FIXME:key string ko access krne k liye bracket notation use krna padta hai
     age: 30,
     isAdmin: true,
     courses: ["html", "css", "js"],
        address: "gwalior",
        email:"vijay@gmail.com",
        [mySym]:  "mykey1",
   
      

    }
  //  console.log(jsUser["name "]); //FIXME: [] use kiaa h access krne k liye
    //console.log(jsUser.name);// ue simple dot notation se access kr skte h
   // console.log(jsUser[mySym]);
jsUser.email= "nabhsikarwar@gmail.com"
    //console.log(jsUser);
   // Object.freeze(jsUser) // object ko freeze kr diya h ab hum isme koi bhi change nhi kr skte h
    jsUser.email= "nabhtomar@gmail.com";
   // console.log(jsUser);
    
    jsUser.greeting = function (){
        console.log("hello  JS user");
    }
   
    jsUser.greetingTwo = function (){
        console.log(`hello  JS user, ${this["name "]}`);
        
    }

    console.log(jsUser.greeting());
    
   console.log(jsUser.greetingTwo());
