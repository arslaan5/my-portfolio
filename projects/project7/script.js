let a, b, c;

function compare() {
    a = document.getElementById("input1").value;
    b = document.getElementById("input2").value;
    c = document.getElementById("input3").value;
    
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (a > b) {
      if (a > c) {
        document.getElementById("result").innerHTML =
          "First number  is the largest";
      } else {
        document.getElementById("result").innerHTML =
          "Third number  is the largest";
      }
    } else if (b > c) {
      if (b > a) {
        document.getElementById("result").innerHTML =
          "Second number  is the largest";
      } else {
        document.getElementById("result").innerHTML =
          "First number  is the largest";
      }
    } else if (c > a) {
      if (c > b) {
        document.getElementById("result").innerHTML =
          "Third number  is the largest";
      } else {
        document.getElementById("result").innerHTML =
          "Second number  is the largest";
      }
    }
}
