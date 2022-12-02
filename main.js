const balanceScreen = document.getElementById("balance")
const totalIncomeScreen = document.getElementById('total-income')
const totalExpensesScreen = document.getElementById('total-expenses')
const logList = document.getElementById('log-section')
let balance = 0;
let income = 0;
let expenses = 0;
// income form
const incomeForm = document.getElementById('income-form')
const incomeText = document.getElementById('income-text')
const incomeAmount = document.getElementById('income-amount')
// expenses from
const expensesFrom = document.getElementById('expenses-form')
const expensesText = document.getElementById('expenses-text')
const expensesAmount = document.getElementById('expenses-amount')


function getBalance() {
    balance = income - expenses
    totalIncomeScreen.textContent = income
    totalExpensesScreen.textContent = expenses
    balanceScreen.textContent = balance
}

incomeForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let text
    let amount
    if (incomeText.value.length > 0 && incomeAmount.value > 0) {
        text = incomeText.value
        amount = incomeAmount.value
        incomeAmount.value = ''
        incomeText.value = ''
        
    } else {
        alert("Invalid Inputs")
        incomeAmount.value = ""
        incomeText.value = ""
        return
    }
    income += Number(amount)
    getBalance()
    incomeLog(amount, text)
})

expensesFrom.addEventListener("submit", function (e) {
  e.preventDefault()
  let text
  let amount
  if (expensesText.value.length > 0 && expensesAmount.value > 0) {
    text = expensesText.value
    amount = expensesAmount.value
    expensesAmount.value = ""
    expensesText.value = ""
  } else {
    alert("Invalid Inputs")
    expensesAmount.value = ""
    expensesText.value = ""
    return
  }
  expenses += Number(amount)
    getBalance()
    expensesLog(amount, text)
})


function incomeLog(amount, text) {
    let newLog = document.createElement('p')
    newLog.classList.add('log-inc')
    newLog.innerHTML = `
    <span>${amount}</span> ${text}<i class="fa-solid fa-trash" onclick="deleteTrans(this)"></i>
    `
    logList.insertBefore(newLog, logList.firstChild)
    
}

function expensesLog(amount, text) {
  let newLog = document.createElement("p")
  newLog.classList.add("log-exp")
  newLog.innerHTML = `
    <span>${amount}</span> ${text}<i class="fa-solid fa-trash" onclick="deleteTrans(this)"></i>
    `
  logList.insertBefore(newLog, logList.firstChild)
}

function deleteTrans(e) {
  let eValue = Number(e.parentElement.children[0].textContent)
  let ele = e.parentElement
  if (ele.classList.contains("log-inc")) {
    income -= eValue
    getBalance()
    ele.remove()
  } else {
    expenses -= eValue
    getBalance()
    ele.remove()
  }
  
}

