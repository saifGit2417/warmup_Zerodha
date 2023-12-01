const capital = document.getElementById("capital");
const tenure = document.getElementById("tenure");
const interestRate = document.getElementById("interestRate");
const calculateReturns = document.getElementById("calculateReturns");
const resetBtn = document.getElementById("resetBtn");
const resultText = document.getElementById("resultText");

calculateReturns.addEventListener("click", () => {
  const futureValue =
    capital.value * Math.pow(1 + interestRate.value / 100, tenure.value);
  resultText.textContent = futureValue;
});

resetBtn.addEventListener("click", () => {
  capital.value = 0;
  tenure.value = 0;
  interestRate.value = 0;
  resultText.innerText = "";
});
