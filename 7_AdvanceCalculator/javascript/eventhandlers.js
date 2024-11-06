import { calculatorState, getResultOfOperationAsString, getValueAsNumber, getValueAsString, setStringAsValue } from "./calculator.js";

const acElement = document.querySelector('.ac');
const pmElement = document.querySelector('.pm');
const percentElement = document.querySelector('.percent');

const additionElement = document.querySelector('.addition');
const subtractionElement = document.querySelector('.subtraction');
const multiplicationElement = document.querySelector('.multiplication');
const divisionElement = document.querySelector('.division');
const equalElement = document.querySelector('.equal');

const decimalElement = document.querySelector('.decimal');
const numberElements = Array.from(document.querySelectorAll('.number'));

export const setupEventListeners = () => {
  // Add EventListeners to functions
  acElement?.addEventListener('click', handleACClick);
  pmElement?.addEventListener('click', () => {
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
  percentElement?.addEventListener('click', handlePercentClick);


  // Add EventListeners to operators
  additionElement?.addEventListener('click', () => {
    handleOperatorClick('addition');
  });
  subtractionElement?.addEventListener('click', () => {
    handleOperatorClick('subtraction');
  });
  multiplicationElement?.addEventListener('click', () => {
    handleOperatorClick('multiplication');
  });
  divisionElement?.addEventListener('click', () => {
    handleOperatorClick('division');
  });
  equalElement?.addEventListener('click', () => {
    handleEqualClick();
  });

  // Add EventListeners to numbers and buttons
  numberElements.forEach(numberElement => {
    numberElement.addEventListener('click', () => {
      handleNumberClick(numberElement.textContent);
    });
  })
  decimalElement?.addEventListener('click', handleDecimalClick);

  // [Extra1] Add EventListeners for key events
  document.addEventListener('keyup', event => {
    if (/^[0-9]$/.test(event.key)) {
      handleNumberClick(event.key);
    } else if (event.key === '+') {
      handleOperatorClick('addition');
    } else if (event.key === '-') {
      handleOperatorClick('subtraction');
    } else if (event.key === '*') {
      handleOperatorClick('multiplication');
    } else if (event.key === '/') {
      handleOperatorClick('division');
    } else if (event.key === '=' || event.key === 'Enter') {
      handleEqualClick();
    } else if (event.key === 'Escape') {
      handleACClick();
    } else if (event.key === '.') {
      handleDecimalClick();
    } else if (event.key === '%') {
      handlePercentClick();
    }
  });
};

const handleNumberClick = (numString) => {
  const currentValueString = getValueAsString();
  if (currentValueString === '0') {
    setStringAsValue(numString);
  } else {
    setStringAsValue(currentValueString + numString)
  }
};

const handleOperatorClick = (operation) => {
  const currentValueString = getValueAsString();
  if (!calculatorState.memorizedValue) {
    calculatorState.memorizedValue = currentValueString;
    calculatorState.operator = operation;
    setStringAsValue('0');
    return;
  }
  calculatorState.memorizedValue = getResultOfOperationAsString();
  calculatorState.operator = operation;
  setStringAsValue('0');
};

const handleEqualClick = () => {
  if (calculatorState.memorizedValue) {
    setStringAsValue(getResultOfOperationAsString());
    calculatorState.memorizedValue = null;
    calculatorState.operator = null;
  }
};

const handleACClick = () => {
  setStringAsValue('0');
  calculatorState.memorizedValue = null;
  calculatorState.operator = null;
};

const handleDecimalClick = () => {
  const currentValueString = getValueAsString();
  if (!currentValueString.includes('.')) {
    setStringAsValue(currentValueString + '.');
  }
};

const handlePercentClick = () => {
  const currentValueNumber = getValueAsNumber();
  const newValueNumber = currentValueNumber / 100;
  setStringAsValue(newValueNumber.toString());
  calculatorState.memorizedValue = null;
  calculatorState.operator = null;
};
