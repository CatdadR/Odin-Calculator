let calcParams = {
    strOne: "" ,
    strTwo: "" ,
    strTemp: "0",
    strResult: "",
    operator: false,
    cOperator: "",
    isDecimal: false,
    Display: document.getElementsByClassName("numDisplay") 
};

function recInput(input){

    if (input == '.' && calcParams.strTemp.indexOf('.') > -1){
        input = ""
    }

    if(calcParams.operator == false && calcParams.strOne.length < 8){
        calcParams.strOne = calcParams.strOne + input; 
        calcParams.strTemp = calcParams.strOne 
    } else if (calcParams.operator == true && calcParams.strTwo.length < 8){
        calcParams.strTwo = calcParams.strTwo + input;
        calcParams.strTemp = calcParams.strTwo
    }

    updateDisplay(); 
} 

function reset(){
    calcParams.strOne = ""
    calcParams.strTwo =  ""
    calcParams.strTemp = "0"
    calcParams.operator = false
    calcParams.cOperator = ""
    updateDisplay();
}

function invert(){
    if(calcParams.strTemp != 0){
        if (calcParams.strTemp = calcParams.strOne){
            calcParams.strOne = -calcParams.strOne
            calcParams.strTemp = calcParams.strOne 
        } else if (calcParams.strTemp = calcParams.strTwo){
            calcParams.strTwo = -calcParams.strTwo
            calcParams.strTemp = calcParams.strTwo
        }
        updateDisplay();
    }
}

function percentage(){
    if(calcParams.strTemp != 0){
        if (calcParams.strTemp = calcParams.strOne){
            calcParams.strOne = calcParams.strOne / 100
            calcParams.strTemp = calcParams.strOne 
        } else if (calcParams.strTemp = calcParams.strTwo){
            calcParams.strTwo = -calcParams.strTwo / 100
            calcParams.strTemp = calcParams.strTwo
        }
        updateDisplay();  
    }
}


function operation(operator){
    if(calcParams.strOne != 0){
        
        calcParams.operator = !calcParams.operator  

        if (calcParams.operator == false){
        switch (calcParams.cOperator){
            case '+':
                calcParams.strOne = (Number(calcParams.strOne) + Number(calcParams.strTwo));  
                calcParams.strTwo = "";
                calcParams.operator = !calcParams.operator
                break;
            case '-':
                calcParams.strOne = (Number(calcParams.strOne) - Number(calcParams.strTwo));
                calcParams.strTwo = "";  
                calcParams.operator = !calcParams.operator 
                break; 
            case '*':
                calcParams.strOne = (Number(calcParams.strOne) * Number(calcParams.strTwo));
                calcParams.strTwo = "";  
                calcParams.operator = !calcParams.operator
                break;
            case '/':
                if (calcParams.strTwo != 0){
                calcParams.strOne = (Number(calcParams.strOne) / Number(calcParams.strTwo));
                calcParams.strTwo = "";  
                calcParams.operator = !calcParams.operator
                } else {
                    calcParams.strOne = "Can't divide by zero"    
                }
                break; 
            case '=':
                calcParams.operator = !calcParams.operator
                break;
            default:    
        }  
    }

    calcParams.cOperator = operator
    calcParams.strTemp = calcParams.strOne 
    updateDisplay(); 
    }
}

function updateDisplay(){
    Display = calcParams.Display;
    
    for (let i = 0; i < Display.length; i++) {
        if (calcParams.strTemp == "."){
            Display[i].innerHTML = calcParams.strTemp
        } else {
            Display[i].innerHTML = Math.round(calcParams.strTemp*100)/100;
        }
    }; 
}