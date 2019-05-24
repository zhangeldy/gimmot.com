import React from "react";
import { CssBox } from "../Comments/CommentsStyle";


function Comments(props) {
  return (
    <CssBox>
      <input placeholder="Написать комментарий..."/>
    </CssBox>
  );
}

export default Comments;
