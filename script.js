// Notes Calculator Logic
function calculateTotalNotes() {
  let total = 0;
  let breakdown = "";
  
  [500, 200, 100, 50, 20, 10].forEach(denom => {
      let count = parseInt(document.getElementById(`note-${denom}`).value) || 0;
      let subtotal = count * denom;
      if (count > 0) breakdown += `${denom} × ${count} = ₹${subtotal}<br>`;
      total += subtotal;
  });

  document.getElementById('notes-breakdown').innerHTML = breakdown;
  document.getElementById('total-notes').innerText = `Total: ₹${total}`;
}

function clearNotesCalculator() {
  document.querySelectorAll('.notes-grid input').forEach(input => input.value = "");
  document.getElementById('notes-breakdown').innerHTML = "";
  document.getElementById('total-notes').innerText = "Total: ₹0";
}

// Bank Balance Calculator Logic (with expression support)
function safeEval(expression) {
  try {
    return Function('"use strict"; return (' + expression + ')')();
  } catch (error) {
    return NaN;
  }
}

function calculateBalance() {
  let totalCash = safeEval(document.getElementById("totalCash").value) || 0;
  let openingBalance = safeEval(document.getElementById("openingBalance").value) || 0;
  let personalUse = safeEval(document.getElementById("personalUse").value) || 0;
  let cashWithdrawal = safeEval(document.getElementById("cashWithdrawal").value) || 0;
  let physicalCash = safeEval(document.getElementById("physicalCash").value) || 0;

  let remainingBalance = (totalCash + openingBalance) - (personalUse + cashWithdrawal + physicalCash);

  if (isNaN(remainingBalance)) {
    document.getElementById("bank-result").innerHTML = `<b>Please enter valid numbers or expressions.</b>`;
  } else {
    document.getElementById("bank-result").innerHTML = `<b>Remaining Balance: ₹${remainingBalance.toFixed(2)}</b>`;
  }
}

function clearBalanceCalculator() {
  document.querySelectorAll('.bank-container input').forEach(input => input.value = "");
  document.getElementById("bank-result").innerHTML = "";
}

// Calculator Logic
function updateScreen(value) {
  document.getElementById('calculator-screen').value += value;
}

function backspace() {
  let screen = document.getElementById('calculator-screen');
  screen.value = screen.value.slice(0, -1);
}

function clearScreen() {
  document.getElementById('calculator-screen').value = "";
}

function calculateResult() {
  let screen = document.getElementById('calculator-screen');
  try {
      screen.value = eval(screen.value);
  } catch {
      screen.value = "Error";
  }
}
