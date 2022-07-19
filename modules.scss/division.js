const display = document.getElementById("display");
let result = 0;
function dividingNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "/" && arr[i + 1] == "0") {
        arr.splice(0, arr.length, "error");
    } else if (arr[i] == "/"&& arr[i + 1] != 0) {
      result = parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]);
      arr.splice(i - 1, 3, result);
      i = i - 1;
      console.log(result);
      console.log(arr);
    }
  }
  return arr;

}

// function displayError() {
//   console.log(display);
//   display.value = "Error";
// }

export default dividingNumbers;
