// DOM Elements
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const valueElement = document.querySelector('.value');

const acElement = document.querySelector('.ac');
const pmElement = document.querySelector('.pm');
const percentElement = document.querySelector('.percent');

const additionElement = document.querySelector('.addition');
const subtractionElement = document.querySelector('.subtraction');
const multiplicationElement = document.querySelector('.multiplication');
const divisionElement = document.querySelector('.division');
const equalElement = document.querySelector('.equal');

const decimalElement = document.querySelector('.decimal');
const number0Element = document.querySelector('.number-0');
const number1Element = document.querySelector('.number-1');
const number2Element = document.querySelector('.number-2');
const number3Element = document.querySelector('.number-3');
const number4Element = document.querySelector('.number-4');
const number5Element = document.querySelector('.number-5');
const number6Element = document.querySelector('.number-6');
const number7Element = document.querySelector('.number-7');
const number8Element = document.querySelector('.number-8');
const number9Element = document.querySelector('.number-9');
const numberElementArray = [
  number0Element, number1Element, number2Element, number3Element, number4Element,
  number5Element, number6Element, number7Element, number8Element, number9Element
];


// variables
let valueStringInMemory = null;
let operatorInMemory = null;

// Functions
const getValueAsString = () => valueElement.textContent.split(',').join('');

const getValueAsNumber = () => parseFloat(getValueAsString());

const setStringAsValue = (valueString) => {
  if (valueString[valueString.length -1] === '.') {
    valueElement.textContent += '.';
    return;
  }

  const [wholeNumber, decimalString] = valueString.split('.');
  if (decimalString !== undefined) {
    valueElement.textContent = parseFloat(wholeNumber).toLocaleString() + '.' + decimalString;
  } else {
    valueElement.textContent = parseFloat(wholeNumber).toLocaleString();
  }
};

const handleNumberClick = (numString) => {
  const currentValueString = getValueAsString();
  if (currentValueString === '0') {
    setStringAsValue(numString);
  } else {
    setStringAsValue(currentValueString + numString)
  }
};

const getResultOfOperationAsString = () => {
  const currentValueNumber = getValueAsNumber();
  const valueNumberInMemory = parseFloat(valueStringInMemory);
  let newValueNumber;
  if (operatorInMemory === 'addition') {
    newValueNumber = valueNumberInMemory + currentValueNumber;
  } else if (operatorInMemory === 'subtraction') {
    newValueNumber = valueNumberInMemory - currentValueNumber;
  } else if (operatorInMemory === 'multiplication') {
    newValueNumber = valueNumberInMemory * currentValueNumber;
  } else if (operatorInMemory === 'division') {
    newValueNumber = valueNumberInMemory / currentValueNumber;
  }

  return newValueNumber.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueString = getValueAsString();
  if (!valueStringInMemory) {
    valueStringInMemory = currentValueString;
    operatorInMemory = operation;
    setStringAsValue('0');
    return;
  }
  valueStringInMemory = getResultOfOperationAsString();
  operatorInMemory = operation;
  setStringAsValue('0');
};

// Add EventListeners to functions
acElement.addEventListener('click', () => {
  setStringAsValue('0');
  valueStringInMemory = null;
  operatorInMemory = null;
});
pmElement.addEventListener('click', () => {
  const currentValueNumber = getValueAsNumber();
  const currentValueString = getValueAsString();

  if (currentValueString === '-0') {
    setStringAsValue('0');
    return;
  }

  if (currentValueNumber >= 0) {
    setStringAsValue('-' + currentValueString);
  } else {
    setStringAsValue(currentValueString.substring(1));
  }
});
percentElement.addEventListener('click', () => {
  const currentValueNumber = getValueAsNumber();
  const newValueNumber = currentValueNumber / 100;
  setStringAsValue(newValueNumber.toString());
  valueStringInMemory = null;
  operatorInMemory = null;
});


// Add EventListeners to operators
additionElement.addEventListener('click', () => {
  handleOperatorClick('addition');
});
subtractionElement.addEventListener('click', () => {
  handleOperatorClick('subtraction');
});
multiplicationElement.addEventListener('click', () => {
  handleOperatorClick('multiplication');
});
divisionElement.addEventListener('click', () => {
  handleOperatorClick('division');
});
equalElement.addEventListener('click', () => {
  if (valueStringInMemory) {
    setStringAsValue(getResultOfOperationAsString());
    valueStringInMemory = null;
    operatorInMemory = null;
  }
});


// Add EventListeners to numbers and buttons
for (let i = 0; i < numberElementArray.length; i++) {
  const numberElement = numberElementArray[i];
  numberElement.addEventListener('click', () => {
    handleNumberClick(numberElement.textContent);
  });
}
decimalElement.addEventListener('click', () => {
  const currentValueString = getValueAsString();
  if (!currentValueString.includes('.')) {
    setStringAsValue(currentValueString + '.');
  }
});

// Set up the time
const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (currentHour > 12) {
    currentHour -= 12;
  }
  hourElement.textContent = currentHour.toString();
  minuteElement.textContent = currentMinute.toString().padStart(2, '0');
}
setInterval(updateTime, 1000);
updateTime();