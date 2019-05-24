import React from "react";
import { CssBox } from "./MarksStyle";


function Marks(props) {
  return (
    <CssBox>
      <span className="mark-item">Хочу сейчас</span>
      <span className="mark-item">С местом</span>
      <span className="mark-item">На машине</span>
    </CssBox>
  );
}

export default Marks;
