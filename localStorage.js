//@Hurtle_GEO
var typed = new Typed(".server",{
    strings:["SERVER","DATABASE","STORAGE"],
    typeSpeed:155,
    backSpeed:155,
    looped: true,})
const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const buttonClick = document.getElementById("buttonClick");
const isOutPut = document.getElementById("isOutPut");
 
 const error = document.getElementById("error");
 const butt = document.getElementById("re");

buttonClick.addEventListener('click',()=>{
const key = inputKey.value;
const value = inputValue.value;
if(key && value ){
localStorage.setItem(key,value);
location.reload() 
}else{  document.getElementById("error").innerHTML = "Input key and value"}
})


function remove(index) {
    if ( index < localStorage.length) {
      const keyToRemove = localStorage.key(index);//the  removebutton
      localStorage.removeItem(keyToRemove);
      location.reload();
    }
  }


 for(let i = 1; i < localStorage.length; i++){
const key = localStorage.key(i);
const value = localStorage.getItem(key);
isOutPut.innerHTML +=  `  <div id="each">  <strong>  ${i}.</strong> ${key} == ${value}<br><button id="re" onclick="remove(${i})">Remove</button><br/> </div>`;}
//use to remove item from the local storage localStorage.removeItem(//[you pass the key of the value you would like to remove]"film");
//developer//
