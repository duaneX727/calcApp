import {useContext} from "react";
import { Textfit } from 'react-textfit';
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
  const {calc} = useContext(CalcContext);
  return (
    <Textfit className="screen">5453987</Textfit>
  )
}

export default Screen;