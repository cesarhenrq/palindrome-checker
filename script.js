const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  if (textInput.value === "") {
    alert("Please input a value");
    return;
  }

  const text = textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedText = text.split("").reverse().join("");

  result.innerHTML =
    text === reversedText
      ? `
    <span id="result-text">${textInput.value}</span> is a palindrome
    `
      : `
    <span id="result-text">${textInput.value}</span> is not a palindrome`;
};

checkButton.addEventListener("click", checkPalindrome);
