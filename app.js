function inputNumber(char) {
  const display = document.getElementById("number");
  display.value += char;
}

function clearDisplay() {
  document.getElementById("number").value = "";
}

function deleteNumber() {
  const display = document.getElementById("number");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("number");
  try {
    // Use eval() carefully — it directly evaluates a string as JavaScript
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
