//Calculator Program

const display = document.getElementById("display");
const validInput = /^[0-9+\-*/().]$/;
const lastChar = display.value.slice(-1);


//add function to window to put in global scope
window.appendToDisplay = function(input){
    const display = document.getElementById('display');
    display.value += input;
}


     // Prevent multiple consecutive operators
    if (/^[+\-*/]$/.test(input) && /^[+\-*/]$/.test(lastChar)) {
        return;
    }

    // if (validInput.test(input)) {
    //     display.value += input;
    // }
function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
       display.value = eval(display.value); 
    } catch (error) {
        display.value =  "Error detected,please press clear to restart";
    }
}