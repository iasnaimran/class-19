
function time() {
    var now = new Date();
    document.write("Current Date & Time: " + now);
}


function user(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello " + fullName + "! Welcome.");
}

user("Asna ", "imran");


function numbers() {
    var num1 = +prompt("Enter first number:");
    var num2 = +prompt("Enter second number:");
    
    var sum = num1 + num2;
    return sum;
}

var result = numbers();
alert("Sum of two numbers is: " + result);





function calculator(num1, num2, operator) {
    var result;

    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        result = num1 / num2;
    }
    else {
        result = "Invalid Operator";
    }

    return result;
}

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var op = prompt("Enter operator (+, -, *, /):");

var answer = calculator(num1, num2, op);
alert("Result is: " + answer);






function square(num) {
    return num * num;
}

var result = square(6);
alert("Square is: " + result);



function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

var number = +prompt("Enter a number to find its factorial:");
var result = factorial(number);
alert("Factorial of " + number + " is: " + result);







function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

var startNum = +prompt("Enter start number:");
var endNum = +prompt("Enter end number:");





function area(width, height) {
    var A = width * height;
    return A;
}


var result1 = area(10, 5);
alert("Area of rectangle (arguments as values): " + result1);

var w = +prompt("Enter width of rectangle:");
var h = +prompt("Enter height of rectangle:");

var result2 = area(w, h);
alert("Area of rectangle (arguments as variables): " + result2);





function isPalindrome(str) {
   
    var lowerStr = str.toLowerCase();


    var reversedStr = lowerStr.split('').reverse().join('');

    if (lowerStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}

var word = prompt("Enter a word to check if it's a palindrome:");
if (isPalindrome(word)) {
    alert(word + " is a palindrome!");
} else {
    alert(word + " is not a palindrome.");
}




function hypotenuse(base, perpendicular) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(base) + square(perpendicular));
}

n  