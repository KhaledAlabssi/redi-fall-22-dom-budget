const balance = document.getElementById("balance")
const totalIncome = document.getElementById('total-income')
const totalExpenses = document.getElementById('total-expenses')
// income form
const incomeForm = document.getElementById('income-form')
const incomeText = document.getElementById('income-text')
const incomeAmount = document.getElementById('income-amount')

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
        return
    }
    totalIncome.textContent = amount
})


