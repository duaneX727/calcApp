import {useContext} from "react";
//import { Textfit } from 'react-textfit';
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
  const {calc} = useContext(CalcContext);
  return (
    <div className="screen">5453987</div>
  )
}

export default Screen;