const calcBtn = document.getElementById("calcBtn");
const tipPercentInput = document.getElementById("tipPercent");
const billAmountInput = document.getElementById("billAmount");
const tipTotal = document.getElementById("tipTotal");

const calculateTip = () => {

  const billAmount = parseFloat(billAmountInput.value);
  const tipPercent = parseFloat(tipPercentInput.value);


  if (isNaN(billAmount) || isNaN(tipPercent) || billAmount === 0 || tipPercent === 0) {
    let error = document.createElement("h2");
    error.innerHTML = 'Please enter a valid bill amount and tip percent!';
    
    document.body.appendChild(error)
    error.classList.add(error)
  }


  const newTotal = billAmount * (1 + tipPercent / 100);


  tipTotal.innerHTML = newTotal.toFixed(2);
};


calcBtn.addEventListener("click", calculateTip);