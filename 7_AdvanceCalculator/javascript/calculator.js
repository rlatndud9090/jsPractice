export const calculatorState = {
  currentValue: '0',
  memorizedValue: null,
  operator: null,
};

// Functions
export const getValueAsString = () => calculatorState.currentValue.split(',').join('');

export const getValueAsNumber = () => parseFloat(getValueAsString());

export const setStringAsValue = (valueString) => {
  if (valueString[valueString.length -1] === '.') {
    calculatorState.currentValue += '.';
    return;
  }

  const [wholeNumber, decimalString] = valueString.split('.');
  if (decimalString !== undefined) {
    calculatorState.currentValue = parseFloat(wholeNumber).toLocaleString() + '.' + decimalString;
  } else {
    calculatorState.currentValue = parseFloat(wholeNumber).toLocaleString();
  }

  displayValue();
};

export const displayValue = () => {
  const valueElement = document.querySelector('.value');
  if (valueElement) {
    valueElement.textContent = calculatorState.currentValue;
  }
}

export const getResultOfOperationAsString = () => {
  const currentValueNumber = getValueAsNumber();
  const valueNumberInMemory = parseFloat(calculatorState.memorizedValue);
  let newValueNumber;
  if (calculatorState.operator === 'addition') {
    newValueNumber = valueNumberInMemory + currentValueNumber;
  } else if (calculatorState.operator === 'subtraction') {
    newValueNumber = valueNumberInMemory - currentValueNumber;
  } else if (calculatorState.operator === 'multiplication') {
    newValueNumber = valueNumberInMemory * currentValueNumber;
  } else if (calculatorState.operator === 'division') {
    newValueNumber = valueNumberInMemory / currentValueNumber;
  }

  return newValueNumber.toString();
};