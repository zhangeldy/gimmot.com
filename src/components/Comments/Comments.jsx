import React from "react";
import { CssBox } from "../Comments/CommentsStyle";
import Comment from "./Comment";

function Comments(props) {
  return (
    <CssBox>
      <div className="comments">
        <Comment />
      </div>
      <div className="add-comment">
        <input placeholder="Написать комментарий..." />
      </div>
    </CssBox>
  );
}

export default Comments;
