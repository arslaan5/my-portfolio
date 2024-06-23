function checker() {
    let age = document.getElementById( "box" ).value;
    if (age>=18) {
        alert("You are eligible to vote");
    } 
    else if (age<18) {
        alert("Sorry, you are not eligible to vote yet.");
    }
    else{
        alert("Please enter a valid number.")
    }
}
