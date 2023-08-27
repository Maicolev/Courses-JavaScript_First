const c_formCalculator = document.forms["formCalculator"];
let v_operatorA = c_formCalculator["operatorA"];
let v_operatorB = c_formCalculator["operatorB"];
let v_buttonSum = c_formCalculator["butSum"];
let v_result = c_formCalculator["result"];

//const c_buttonSum = document.getElementById('butSum');
v_buttonSum.addEventListener(
  "click",
  (event) => {
    v_result.value = sum(v_operatorA.value, v_operatorB.value);
    alert(sum(v_operatorA.value, v_operatorB.value));
  },
  true
);

function sum(operatorA, operatorB) {
   let sum = parseInt(operatorA) + parseInt(operatorB);
  if (isNaN(sum)){
    sum = "Cancel operation, operator a or operator b aren't numbers";
  }
  return sum;
}