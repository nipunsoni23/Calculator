/*
  TODO - >  
  ye ast me abi functions
  khud krna nhai tuje try krio
  1. 2 same symbols ek sath nahi aane chhaiye
  2. ... 
*/


function showSymbol(i) {
  document.getElementById("num").value += i;
}
function del() {
  document.getElementById("num").value = document.getElementById("num").value.slice(0, document.getElementById("num").value.length - 1)
    ;
  //used slice method
}

function ans() {
  document.getElementById("num").value = eval(document.getElementById("num").value);

}

