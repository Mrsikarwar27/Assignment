var inc =document.querySelector('#inc');
var dec =document.querySelector('#dec');
var h1 =document.querySelector('h1');
var count =0;

inc.addEventListener('click',function(){
    count++
    h1.innerHTML=count;
})

dec.addEventListener('click',function(){
    count--
    h1.innerHTML=count;
})