//wait for DOM to load before running the game

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click",function() {
            if (this.getAttribute("data-type")=="submit") {
                console.log("checking answer");
                checkAnswer();
            } else {
                let gameType=this.getAttribute("data-type");
                console.log("running game");
                runGame(gameType);
            }
        });
    }
    //addition is default game
    runGame("addition");
})


function runGame (gameType) {
    //Generate 2 numbers between 1 and 10
    let num1=Math.floor(Math.random()*10)+1;
    let num2=Math.floor(Math.random()*10)+1;
    //add operand to span with id operator
    if (gameType==="addition") {
        displayAdditionQuestion(num1, num2);
    }
    else if (gameType==="subtract") {
        displaySubtractQuestion(num1, num2);
    }
    else if (gameType==="multiply") {
        displayMultiplyQuestion(num1, num2);
    }
    else if (gameType==="division") {
        displayDivisionQuestion(num1, num2);
    }
    else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`
    }
}

function displayAdditionQuestion (num1, num2) {
    //add to spans with id operand1 and operand2
    document.getElementById("operand1").innerHTML=num1;
    document.getElementById("operand2").innerHTML=num2;
    //add operator
    document.getElementById("operator").innerHTML="+";
    calcluateCorrectAnswer();
}

function displaySubtractQuestion (num1, num2) {
    //add to spans with id operand1 and operand2
    document.getElementById("operand1").innerHTML=num1;
    document.getElementById("operand2").innerHTML=num2;
    //add operator
    document.getElementById("operator").innerHTML="-";
    calcluateCorrectAnswer();
}

function displayMultiplyQuestion (num1, num2) {
    //add to spans with id operand1 and operand2
    document.getElementById("operand1").innerHTML=num1;
    document.getElementById("operand2").innerHTML=num2;
    //add operator
    document.getElementById("operator").innerHTML="x";
    calcluateCorrectAnswer();
}

function displayDivisionQuestion (num1, num2) {
    //add to spans with id operand1 and operand2
    document.getElementById("operand1").innerHTML=num1;
    document.getElementById("operand2").innerHTML=num2;
    //add operator
    document.getElementById("operator").innerHTML="/";
    calcluateCorrectAnswer();
}

function calcluateCorrectAnswer () {
    let operand1=parseInt(document.getElementById("operand1").innerHTML);
    let operand2=parseInt(document.getElementById("operand2").innerHTML);
    let operator=document.getElementById("operator").innerHTML;
    //by deafult java gets data from the dom it returns it as a string, but we need a number hence perseInt function
    if (operator==="+") {
        return [operand1+operand2,"addition"];
    } else if (operator==="-") {
        return [operand1-operand2,"subtract"];
    } else if (operator==="x") {
        return [operand1*operand2,"multiply"];
    } else if (operator==="/") {
        return [Math.round(operand1/operand2),"division"];//need to do some rounding to nearest integer
    } else {
        alert(`Unknown operator ${operator}`);
        throw `Unknown operator ${operator}, aborting!`  
    } 
}

function checkAnswer () {
    let userAnswer=parseInt(document.getElementById("answer-box").value);
    console.log(userAnswer);
    let calculatedAnswer=calcluateCorrectAnswer();
    console.log(calculatedAnswer[0]);
    let isCorrect = calculatedAnswer[0]===userAnswer;
    //console.log(isCorrect);
    if (isCorrect) {console.log("you are correct");
    } else {
        console.log("you are incorrect");
    }
}

function Answer () {
    
}


function incrementScore () {}
function incrementWrong () {}
