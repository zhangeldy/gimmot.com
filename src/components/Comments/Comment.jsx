import React from "react";
import UserItem from "../UserItem/UserItem";
import { CommentCss } from "./CommentsStyle";

function Comment(props) {
  return (
    <CommentCss>
      <UserItem short comment={"ответил Жангельды, 29"} />
      <div>"Көлеңкенің жарығы" бұл кітаппа? авторы кім  және оны қайдан оқуға болады??</div>
      <div className="left imperceptible mr1">18 мая в 18:13</div>
      <span className="reply">Ответить</span>
    </CommentCss>
  );
}

export default Comment;
