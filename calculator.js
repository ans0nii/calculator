document.querySelectorAll(".calc-button").forEach((element) => {
  element.addEventListener("click", (e) => {
    let buttonValue = e.target.textContent;
    let display = document.querySelector("#number-input");
    let currentValue = display.value;
    let newValue = currentValue + buttonValue;
    const strNumbers = currentValue.split(/[*+/=-c%]/);
    const operators = currentValue.match(/[*+/=-c%]/g);

    console.log(strNumbers);
    console.log(operators);

    if (currentValue.length < 9) {
      newValue = currentValue + buttonValue;
      display.value = buttonValue;
      display.value = newValue;
    }
    let actualNumber = strNumbers;
    actualNumber = strNumbers.map(Number);

    const tokenArray = actualNumber.map((num, i) => {
      return {
        value: num,
        operator: operators[i] || null,
      };
    });
  });
});
