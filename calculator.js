let currentResult = 0;

const userInput = document.getElementById("user-Input");
const addButton = document.getElementById("dodawanie");
const substrButton = document.getElementById("odejmowanie");
const divideButton = document.getElementById("dzielenie");
const multButton = document.getElementById("mnozenie");
let logEntries = [];

const currentResultOutput = document.getElementById("result2");
const currentCalculationOutput = document.getElementById("result1");

//Pobieranie danych od uytkownika
function getUserInput() {
  return (addedNumber = parseFloat(userInput.value));
}

// calculation log
function createAndWriteText(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc}  ${operator}  ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function addToLogArray(operation, prevResult, number, finalResult) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: number,
    finalResult: finalResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  console.log(logEntry.finalResult);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteText("+", initialResult, enteredNumber);
  addToLogArray("ADD", initialResult, enteredNumber, currentResult);
}

function substract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteText("-", initialResult, enteredNumber);
  addToLogArray("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteText("*", initialResult, enteredNumber);
  addToLogArray("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteText("/", initialResult, enteredNumber);
  addToLogArray("DIVIDE", initialResult, enteredNumber, currentResult);
}

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

addButton.addEventListener("click", add);
substrButton.addEventListener("click", substract);
multButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
