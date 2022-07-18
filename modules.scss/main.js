import addingNumbers from "./addition.js";
import subtractingNumbers from "./subtraction.js";
import multiplyingNumbers from "./multiplication.js";
import dividingNumbers from "./division.js";



const display = document.getElementById("display");
const btns = document.querySelectorAll(".btns__btn");// button from 0 to 9
const btnsOp = document.querySelectorAll(".btns__btnOp");// button of operation +,-,*,/
const btnEq = document.querySelector(".btns__btnEq");// the equal buttom
const clearBtn = document.getElementById("clear");// clear button

let previousValue = "";
let valuesArr = []; // array in which the values and operations will be stored.
let finalValue = "";
let result=0;//the result value coming from the operaton performed and that will be displayed

//clear button function
clearBtn.addEventListener("click", () => {
  valuesArr = [];// empty the array
  display.value = null;//empty the display input
});
//when clicking on any button, display the value of the clicked button and store it into final value
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    const btnElement = e.target;
      display.value += btnElement.innerHTML;
      finalValue = previousValue + display.value;
      console.log(finalValue);
  });
}
//when clicking +,-,* or / store the value in valuesArr
for (let i = 0; i < btnsOp.length; i++) {
  btnsOp[i].addEventListener("click", (e) => {
    const btnOp = e.target;
    valuesArr.push(finalValue);// store finalValue into valuesArr
    valuesArr.push(btnOp.textContent);//store the opration required
    display.value = "";// empty the display
    console.log(valuesArr);
  });
}

//when clicking equal, push the second values into the valuesArr and select the operation
btnEq.addEventListener("click", () => {
  valuesArr.push(finalValue);//push the second values into the valuesArr
  console.log(valuesArr.join(""));
  console.log(selectOperation());
  selectOperation();//select the opration
});

//select which operation to perform
function selectOperation() {
  for (let i = 0; i < valuesArr.length; i++) {
    switch(valuesArr[i]){
      case"X":
      result = multiplyingNumbers(valuesArr);
      break;
      case"/":
      result = dividingNumbers(valuesArr);
      break;
      case"+":
      result = addingNumbers(valuesArr);
      break;
      case"-":
      result = subtractingNumbers(valuesArr);
      break;
    }
    i=0//restart mapping from the first element
  }
  displayResult(result);// call displayResult function
  return valuesArr;
}


function displayResult(res) {
  display.value = res;
}