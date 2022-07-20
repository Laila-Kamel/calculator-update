# Calculator Image

[Calculator image](https://i1.wp.com/opensourceforu.com/wp-content/uploads/2017/01/Calculator.jpg?resize=696%2C839&ssl=1)


## Outline
   # Overview:
This is a simple calculator which performs basic operations, addition, subtraction, multiplication and addition.
It includes operations on decimal numbers.

# Project Breakdown
The partial folder includes the following:
1- colors file which has all the colors used in the project.
2- devices file which includes mixins needed to apply media query.
3- mixins file which has all the repeated styles like display flex justify content between, etc...


The modules folder includes the following files:
1-HTML file (index.html)
2-main javascript file (main.js)
3- all the functions needed for the calculations
    a- addition (addition.js)
    b- subtraction (subtraction.js)
    c- multiplication (multiplication.js)
    d- division (division.js)=>in case of dividing by zero, an error is displayed


The main javascript file (main.js):
* when the clear button is clicked, a function that clears all the variables and the display is called.
* when the equal button is clicked, all the variables are cleared except the result variable which can be used for further operations.
* whenever an operator button is clicked, 
    * the result of the previous operation is displayed on the display.
    * selectOperation function is called. It has parameters accumulated result, new value and operator and returns the final value depending on the operator.
