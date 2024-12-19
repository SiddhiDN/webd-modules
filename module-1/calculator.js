let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
           string = evaluateExpression(string);
            input.value = string;


        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;

        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    });
}
 );
function evaluateExpression(expr) { 
    try {
        return Function('"use strict";return (' + expr + ')')();
    } catch (e) { 
        return "Error"; 
    } }
