function addNumbers(){
 const firstNumber=document.getElementById("num1").valueAsNumber;
 const secoundNumber=document.getElementById("num2").valueAsNumber;
 const additon=firstNumber + secoundNumber;
 document.getElementById("result").textContent="Result: " + additon;
}