import addingNumbers from "./addition.js";
import subtractingNumbers from "./subtraction.js";
import multiplyingNumbers from "./multiplication.js";
import dividingNumbers from "./division.js";

const display = document.getElementById("display");
const btns = document.querySelectorAll(".btns__btn"); // button from 0 to 9
const btnsOp = document.querySelectorAll(".btns__btnOp"); // button of operation +,-,*,/
const btnEq = document.querySelector(".btns__btnEq"); // the equal buttom
const clearBtn = document.getElementById("clear"); // clear button


let numValue = 1;
let result = 0; //the result value coming from the operaton performed and that will be displayed
let currentOperator = "";
let previousOperator = "";
let bool = true;
let anotherBool = true;


//clear button function
clearBtn.addEventListener("click", () => {
  result = 0;
  numValue = 0;
  bool = true;//boolean used to clear the display after clicking operator button
  currentOperator = "";
  display.value = null; 
});

//when clicking on any button, display the value of the clicked button and store it into final value
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
      const btnElement = e.target;
      //
      if (bool == false) {
        display.value = null;
        bool = true;
      }
      if (btnElement.innerHTML == "." && numValue == 0) {
        display.value = "0";
      }

      display.value += btnElement.innerHTML;
      numValue = display.value;
      console.log(numValue);
  });
}
//when clicking +,-,* or / store the value in valuesArr
for (let i = 0; i < btnsOp.length; i++) {
  btnsOp[i].addEventListener("click", (e) => {
    const btnOp = e.target;
    currentOperator = btnOp.textContent; 
    //entering the first value, which means result is 0
    if (result == 0) {
      previousOperator = currentOperator;
      result = numValue;// move the number entered to result
      console.log("num value", numValue);
      console.log("result:", result);
      console.log(previousOperator);
      numValue = 0;//clear the number to recieve the second number
      displayResult(result);
    }
    
    else{
      //from the second value entered start performing operations through selectOperation function
      result = selectOperation(result, numValue, previousOperator);
      //move the current operation to previousOperation in order to be ready for the next operation
      previousOperator = currentOperator;
      numValue = 0;
      display.value = result;
      displayResult(result);
    }
    console.log("num value", numValue);
    console.log("result:", result);
    numValue=0;
    bool = false;
  });
}

//when clicking equal
btnEq.addEventListener("click", () => {
  if(result!=0){
    result = selectOperation(result, numValue, previousOperator);
    displayResult(result);
    console.log("num value", numValue);
    console.log("result:", result);
    numValue=result
    result = 0;
    bool = false;
    previousOperator=""
  }
  
});

//select which operation to perform
function selectOperation(res, num, operation) {
  switch (operation) {
    case "X":
      return multiplyingNumbers(res, num);
    case "/":
      return dividingNumbers(res, num);
    case "+":
      return addingNumbers(res, num);
    case "-":
      return subtractingNumbers(res, num);
  }
}
function displayResult(res) {
  display.value = res;
}
