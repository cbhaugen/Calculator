const calc = {
  displayValue: '0',
  tempNumber: '',
  firstOperand: '',
  secondOperand: '',
  operator: null,
  total: '0'
}

function addition (a, b) {
  calc.total = parseFloat(a) + parseFloat(b)
  return calc.total
}

function subtract (a, b) {
  calc.total = a - b
  return calc.total
}

function multiply (a, b) {
  calc.total = a * b
  return calc.total
}

function divide (a, b) {
  if (b === '0') {
    calc.total = "Can't divide by 0"
  } else {
    calc.total = a / b
    return calc.total
  }
}

// update display
function updateDisplay (number) {
  calc.displayValue = number
  document.querySelector('.calcDisplay').firstChild.data = calc.displayValue
}

function operate (operator, a, b) {
  if (operator === 'addition') addition(a, b)
  else if (operator === 'subtract') subtract(a, b)
  else if (operator === 'multiply') multiply(a, b)
  else if (operator === 'divide') divide(a, b)
}

function clear () {
  calc.displayValue = '0'
  calc.tempNumber = ''
  calc.firstOperand = ''
  calc.secondOperand = ''
  calc.operator = null
  calc.total = '0'
}

function equals () {
  calc.secondOperand = calc.tempNumber
  operate(calc.operator, calc.firstOperand, calc.secondOperand)
}

const numButton = document.querySelectorAll('[data-number]')
const operateButton = document.querySelectorAll('[data-operation]')

// button event listeners
// numbers
numButton.forEach(button => {
  button.addEventListener('click', () => {
    const buttonNumber = button.value
    calc.tempNumber = calc.tempNumber.concat(buttonNumber)
    updateDisplay(calc.tempNumber)
  })
})
// equals
document.getElementById('equals').addEventListener('click', () => {
  equals()
  updateDisplay(+calc.total.toFixed(4))
})
// clear
document.getElementById('clear').addEventListener('click', () => {
  clear()
  updateDisplay(0)
})
// operators
operateButton.forEach(button => {
  button.addEventListener('click', () => {
    if (calc.firstOperand === '') {
      calc.firstOperand = calc.tempNumber
      calc.tempNumber = ''
    } else {
      equals()
      calc.firstOperand = calc.total
      calc.secondOperand = ''
      calc.tempNumber = ''
    }
    if (button.value === '+') calc.operator = 'addition'
    else if (button.value === '-') calc.operator = 'subtract'
    else if (button.value === '×') calc.operator = 'multiply'
    else if (button.value === '÷') calc.operator = 'divide'
  })
})

// to do:
// make sure decimal can't be entered more than once
// keyboard support
