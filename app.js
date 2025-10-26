function inputNumber(num) {
  const display = document.getElementById("number");
  display.value += num;
}

function clearDisplay() {
  document.getElementById("number").value = "";
}

function deleteNumber(char) {
  const display = document.getElementById("number");
  display.value -= char;
}
