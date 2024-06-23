var a,b;

function set_a() {
    a = parseFloat(prompt("Enter the value of A"));
}
function set_b() {
    b = parseFloat(prompt("Enter the value of B"));
}
function getsum() {
    let c = a + b;
    document.getElementById('display').innerHTML = c;
}
function getsub() {
    let c = a - b;
    document.getElementById('display').innerHTML = c;
}
function getmul() {
    let c = a * b;
    document.getElementById('display').innerHTML = c;
}
function getdiv() {
    let c = a / b;
    document.getElementById('display').innerHTML = c;
}