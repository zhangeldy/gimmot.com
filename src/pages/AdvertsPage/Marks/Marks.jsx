import React from "react";
import { Wrapper } from "./MarksStyle";


function Marks() {
  return (
    <Wrapper className="italic lowercase fs12">
      <span className="mark-item">Хочу сейчас</span>
      <span className="mark-item">С местом</span>
      <span className="mark-item">На машине</span>
    </Wrapper>
  );
}

export default Marks;
