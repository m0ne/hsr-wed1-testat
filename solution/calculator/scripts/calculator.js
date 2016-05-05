/**
 * core
 */
var currentInputValue = undefined;
var currentOperator = undefined;
var operator1 = undefined;
var operator2 = undefined;

function calculate() {
    console.log("calculate: " + operator1 + " " + currentOperator + " " + operator2);
    if(operator1 === undefined || operator2 === undefined)
        return undefined;
    switch(currentOperator) {
        case '+':
            return operator1 + operator2;
            break;
        case '-':
            return operator1 - operator2;
            break;
        case '/':
            return operator1 / operator2;
            break;
        case '*':
            return operator1 * operator2;
            break;
        default:
            return undefined;
    }
}

function setOperator(operator) {
    currentOperator = operator;
    if(operator1 === undefined) {
        operator1 = currentInputValue;
        currentInputValue = undefined;
        writeInput("");
    }
    writeOutput(((operator1 === undefined) ? "" : (operator1 + " ")) + currentOperator);
}

function equals() {
    operator2 = currentInputValue;
    currentInputValue = calculate();
    console.log("result = " + currentInputValue);
    resetOperators();
    if(currentInputValue === undefined) {
        error("Invalid calculation");
    } else {
        writeInput(currentInputValue);
        writeOutput("");
    }
}

function updateCurrentInputValue(digit) {
    if(currentInputValue === undefined)
        currentInputValue = 0;
    currentInputValue = (currentInputValue * 10) + parseInt(digit);
    console.log('Current input value: ' + currentInputValue);
    writeInput(currentInputValue);
}

function resetOperators() {
    operator1 = undefined;
    operator2 = undefined;
}

function clear() {
    console.log("clear");
    currentInputValue = undefined;
    resetOperators();
    writeInput("");
    writeOutput("");
}

function error(message) {
    console.log("Error: " + message);
    writeOutput(message);
}

/**
 * UI
 */
$(function(){
    writeOutput('Welcome');
    initializeClickHandlers();
});

function initializeClickHandlers() {
    $("button").click(welcomeClickHandler);
    $(".number").click(numberClickHandler);
    $(".operator").click(operatorClickHandler);
    $("#key-\\=").click(equalsClickHandler);
    $("#key-c").click(clearClickHandler);
}

function welcomeClickHandler() {
    console.log("Remove welcome message");
    writeOutput("");
    $("button").unbind("click", welcomeClickHandler)
}

function numberClickHandler() {
    updateCurrentInputValue(this.value);
}

function operatorClickHandler() {
    setOperator(this.value);
}

function equalsClickHandler() {
    equals();
}

function clearClickHandler() {
    clear();
}

function writeOutput(output) {
    $("#output").html(output);
}

function writeInput(input) {
    $("#input").html(input);
}
