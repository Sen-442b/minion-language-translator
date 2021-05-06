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
var output_div = document.querySelector("#output");
var server_URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// Declaring Variables Before initializing function is a good practice
function getTranslationURL(text){
  return server_URL + "?" + text
}
function clickEventHandler(){
    // console.log("clicked");
    // console.log("The input is ",input_textarea.value);
//output_div.innerText= "translated " + input_textarea.value;
var input_text = input_textarea.value; //taking input

}

//calling server for processing 
fetch(getTranslationURL(text))
.then(response => response.json())
.then(json => console.log(jason));
button_translate.addEventListener("click" ,clickEventHandler);



  /** 

  // EXERCISE QUESTION
 
  var text_area= document.querySelector("textarea"); - right
  var primary_button= document.querySelector(".btn-primary") - right
var input_button=document.querySelector("#input-btn")-right;
var input_element=document.getElementsByTagName("#input[name='translator']");-to_check


//home work -1 

let element = document.createElement("div");
let text = document.createTextNode("ayee yo sup?")
document.body.appendChild(element);
//IMP - always add body before appending anything otherwise you will append in DOCUMENT itself
element.appendChild(text);


// TESTING  API 
fetch("https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=work pls")
  .then(response => response.text())
  .then(result => console.log(result))
 

**/