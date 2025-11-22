var btn = document.querySelector("button")
var box = document.querySelector("#box")

btn.addEventListener("click",function(){
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    

  
})



var arr = ["vijay","sambhavi","Tanya","Tripti","vansh","nanu","kalu","som"]
var a =  Math.floor(Math.random()*arr.length);
console.log(arr[a])
