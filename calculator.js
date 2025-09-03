document.querySelectorAll(".calc-button").forEach((element) => {
  element.addEventListener("click", (e) => {
    let buttonValue = e.target.textContent;
    let display = document.querySelector("#number-input");
    let currentValue = display.value;

    if (buttonValue === "c") {
      display.value = "";
      return;
    }

    if (buttonValue === "=") {
      const orgStrNumbers = currentValue.split(/[*+/=-c%]/);
      const orgOperators = currentValue.match(/[*+/=-c%]/g) || [];
      const actualNumbers = orgStrNumbers.map(Number);

      const tokenArray = actualNumbers.map((num, i) => {
        return {
          value: num,
          operator: orgOperators[i] || null,
        };
      });

      let result = equal(tokenArray);
      display.value = result;
      return;
    }

    if (currentValue.length < 9) {
      display.value = currentValue + buttonValue;
    }
  });
});

function equal(tokenArray) {
  let calculation = [...tokenArray];

  for (let i = 0; i < calculation.length; i++) {
    let symbol = calculation[i].operator;
    if (symbol === "*" || symbol === "/" || symbol === "%") {
      let first = calculation[i].value;
      let second = calculation[i + 1].value;
      let result;

      if (symbol === "*") result = first * second;
      if (symbol === "/") result = first / second;
      if (symbol === "%") result = first % second;

      calculation[i] = {
        value: result,
        operator: calculation[i + 1]?.operator || null,
      };
      calculation.splice(i + 1, 1);
      i--;
    }
  }

  for (let i = 0; i < calculation.length; i++) {
    let symbol = calculation[i].operator;
    if (symbol === "+" || symbol === "-") {
      let first = calculation[i].value;
      let second = calculation[i + 1].value;
      let result;

      if (symbol === "+") result = first + second;
      if (symbol === "-") result = first - second;

      calculation[i] = {
        value: result,
        operator: calculation[i + 1]?.operator || null,
      };
      calculation.splice(i + 1, 1);
      i--;
    }
  }

  return calculation[0].value;
}
