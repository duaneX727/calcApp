import {useContext} from "react";
import { Textfit } from 'react-textfit';
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
  const {calc} = useContext(CalcContext);
  return ( 
    <Textfit className="screen" max={70} mode="single">{calc.num ? calc.num.toLocaleString() : calc.res.toLocaleString()}</Textfit>
  )
}

export default Screen;