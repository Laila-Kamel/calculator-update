let result = 0;
function addingNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "+") {
        result = parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]);
        arr.splice(i - 1, 3, result);
        i = i - 1;
        console.log(result);
        console.log(arr);
      }
    }
    return arr;
  }

  export default addingNumbers;