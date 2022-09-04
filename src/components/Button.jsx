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
}

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

  // User "number" click
  const handleClickButton = () => {
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
   const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }
  // User clicks equals
const equalsClick = () => {
  if(calc.res && calc.num){
    const math = (a,b,sign) => {
      const result = {
        '+': (a,b) => a+b, 
        '-': (a,b) => a-b, 
        'x': (a,b) => a*b, 
        '/': (a,b) => a/b, 
        '%': (a,b) => a%b,
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

const handleBtnClick = () =>
  {
    const results = {
      '.': dotClick,
      'C': resetClick,
      '/': divClick,
      'x': timesClick,
      '+': plusClick,
      '-': minusClick,
      '=': equalsClick,
      '%': modulusClick
    }
    if(results[value]){
      return results[value]();
    } else {
      return handleClickButton()
    }
  }

  return (
  <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}> {value} </button>
  )
}
export default Button;