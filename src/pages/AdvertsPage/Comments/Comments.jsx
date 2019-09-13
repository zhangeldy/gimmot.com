import React from "react";
import { CssBox } from "./CommentsStyle";
import Comment from "./Comment";

function Comments(props) {
  return (
    <CssBox>
      <div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className="add-comment">
        <input className="textPrimary" placeholder="Написать комментарий..." />
      </div>
    </CssBox>
  );
}

export default Comments;
