keys = document.querySelectorAll(" #calculator span");
operators = ["+", "-", "÷", "x"];
let point = ".";

for (let index = 0; index < keys.length; index++) {
  keys[index].onclick = function () {
    output = document.querySelector(".screen");
    outputValue = output.innerHTML;
    btnValue = this.innerHTML;

    if (output.innerHTML.endsWith(".") && btnValue == ".") {
      output.innerHTML = outputValue.slice(0, -1);
    } else if (btnValue == "C") {
      output.innerHTML = " ";
    } else if (btnValue == "D") {
      output.innerHTML = outputValue.slice(0, -1);
    } else if (operators.indexOf(btnValue) > -1) {
      console.log(btnValue);
      lastChar = outputValue[outputValue.length - 1];
      console.log(lastChar);
      if (outputValue != " " && operators.indexOf(lastChar) == -1) {
        output.innerHTML += btnValue;
      }

      if (outputValue == " " && operators.indexOf(btnValue) == 1) {
        output.innerHTML += btnValue;
      }
    } else if (btnValue == " = ") {
      equation = outputValue;
      equation = equation.replace(/x/g, "*").replace(/÷/g, "/");
      if (equation) {
        output.innerHTML = eval(equation);
      }
    } else {
      output.innerHTML += btnValue;
    }
  };
}
