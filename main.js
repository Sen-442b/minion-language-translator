/** 
//input 
var user_name = prompt("Enter your username");

//processing 
var welcome_message = `Welcome here  ${user_name}`;


//output
alert(welcome_message);
**/
var button_translate = document.querySelector("#btn-translate");
var input_textarea = document.querySelector("#txt-input");
// Declaring Variables Before initializing function is a good practice
function clickEventHandler(){
    console.log("clicked");
    console.log("The input is ",input_textarea.value);
}

button_translate.addEventListener("click" ,clickEventHandler);






  /** 

  // EXERCISE QUESTION
 
  var text_area= document.querySelector("textarea"); - right
  var primary_button= document.querySelector(".btn-primary") - right
var input_button=document.querySelector("#input-btn")-right;
var input_element=document.getElementsByTagName("#input[name='translator']");-to_check

**/