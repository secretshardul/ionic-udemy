const reasonInput = document.querySelector('#input-reason')
const amountInput = document.querySelector('#input-amount')
const confirmBtn = document.querySelector('#btn-confirm')
const cancelBtn = document.querySelector('#btn-cancel')
const expensesList = document.querySelector('#expenses-list')
const totalExpensesOutput = document.querySelector('#total-expenses')

let totalExpenses = 0

function clear() {
    reasonInput.value = ''
    amountInput.value = ''
}

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value
    const enteredAmount = amountInput.value
    if(
        enteredReason.trim().length <= 0 ||
        enteredAmount.trim().length <= 0 ||
        enteredAmount <= 0
    ) {
        const alert = document.createElement('ion-alert')
        alert.header = 'Invalid inputs'
        alert.message = 'Please enter valid reason and amount'
        alert.buttons = ['OK']
      
        document.body.appendChild(alert)
        return alert.present()
    }
    console.log('valid reason: ' + enteredReason)
    console.log(enteredAmount)
    const newItem = document.createElement('ion-item')
    newItem.textContent = enteredReason + ': $' +enteredAmount

    expensesList.appendChild(newItem);
    clear()
    totalExpenses += +enteredAmount
    totalExpensesOutput.textContent = totalExpenses
})

cancelBtn.addEventListener('click', clear)