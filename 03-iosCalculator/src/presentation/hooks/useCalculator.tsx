import {useRef, useState} from 'react';

enum Operator {
  add,
  sub,
  multiplay,
  divide,
}
export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  // borrar el ultimo numero
  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }
    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      //evaluar si es otro cero y no hay punto

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      // evaluar si es diferente del cero , no hay punto , y es el primer numero
      if (numberString !== '0' && number.includes('.')) {
        return setNumber(numberString);
      }
      // evitar 0000
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  // const buildNumber = (numberString: string) => {};

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiPlyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiplay;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.sub;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.sub:
        setNumber(`${num2 + num1}`);
        break;
      case Operator.multiplay:
        setNumber(`${num1 * num2}`);
        break;
      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;
      default:
        throw new Error('operacion no implementada ');
    }
    setPrevNumber('0');
  };
  return {
    // propiedades

    number,
    prevNumber,
    // metodos
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiPlyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};
