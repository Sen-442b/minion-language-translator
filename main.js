//input 
var user_name = prompt("Enter your username");

//processing 
var welcome_message = `Welcome here  ${user_name}`;


//output
alert(welcome_message);

var button_translate = document.querySelector("#btn-translate");
button_translate.addEventListener("click" , function clickEventHandler(){
    console.log("clicked");
});