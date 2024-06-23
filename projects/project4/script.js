var x,y,c;

function button1() {
    x = parseInt(prompt("Enter first number: "));
}
function button2() {
    y = parseInt(prompt("Enter second number: "));
}

function addition() {
    c = x+y;
    document.getElementById('output').innerHTML = c;
}
function substraction() {
    c = x-y;
    document.getElementById('output').innerHTML = c;
}
function exponential() {
    c = x**y;
    document.getElementById('output').innerHTML = c;
}
function multiplication() {
    c = x*y;
    document.getElementById('output').innerHTML = c;
}
function division() {
    c = x/y;
    document.getElementById('output').innerHTML = c;
}
function modulus() {
    c = x%y;
    document.getElementById('output').innerHTML = c;
}
function sqaure() {
    c = x*x;
    document.getElementById('output').innerHTML = c;
}
function cube() {
    c = x*x*x;
    document.getElementById('output').innerHTML = c;
}