import {useContext} from "react";
import {CalcContext} from "../context/CalcContext";

const getStyleName = btn => {
  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
  }
  return className[btn];
};
 
const Button = ({value}) => {
  const {calc, setCalc} = useContext(CalcContext);
  // User dot click
  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value: calc.num
    })
   }
    // User "C" click
    const resetClick = () => {
      setCalc({
       sign:"",
       num: 0,
       res: 0
      })
    }
    // User "number" click 0 - 9
  const handleNumberClick = () => {
    const numberString = value.toString();

    let numberValue;

    if(numberString === '0' && calc.num === 0){
       numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue
    })
  }
  // User click operator
  const operatorClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }
  const equalsClick = () => {
    if(calc.res && calc.num){
      const math = (a,b,sign) => {
        const result = {
          '+': (a,b) => a+b, 
          '-': (a,b) => a-b, 
          'x': (a,b) => a*b, 
          '/': (a,b) => a/b, 
          // '%': (a,b) => a%b,
        }
       return result[sign](a,b);
     }
     setCalc({
      res: math(calc.res, calc.num, calc.sign),
      sign: '',
      num: 0
    })
   }
  }
  // User click percent
  const percentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: ""
    })
  }
  // User clicks sign change
  const chngSignClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ""
    })
  }
  const handleOperatorClick = () =>
  {
    console.log(value);
  
    const results = {
      '.': dotClick,
      'C': resetClick,
      '/': operatorClick,
      'x': operatorClick,
      '+': operatorClick,
      '-': operatorClick,
      '=': equalsClick,
      '%': percentClick,
      '+-': chngSignClick
    }
    if(results[value]){
      return results[value]();
    } else {
      return handleNumberClick()
    }
  }
  return (
  <button onClick={handleOperatorClick} className={`${getStyleName(value)} button`}> {value} </button>
  )
};
export default Button;