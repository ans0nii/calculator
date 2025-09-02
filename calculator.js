document.querySelectorAll(".calc-button").forEach((element) => {
  element.addEventListener("click", (e) => {
    let buttonValue = e.target.textContent;
    let display = document.querySelector("#number-input");
    let currentValue = display.value;
    let newValue = currentValue + buttonValue;

    if (currentValue.length < 9) {
      newValue = currentValue + buttonValue;
      display.value = buttonValue;
      display.value = newValue;
    }
    
    console.log(buttonValue);
  });
});
