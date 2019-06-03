import React from "react";
import { CssBox } from "./AdvertItemStyle";
import UserItem from "../UserItem/UserItem";
import Marks from "../Marks/Marks";
import Comments from "../Comments/Comments";

function AdvertItem(props) {
  return (
    <CssBox className="paper my1">
      <div className="ai">
        <div className="right imperceptible">18 мая в 18:13</div>
        <UserItem advert />
        <div className="text">
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
        </div>
        <Marks />
      </div>
      <Comments />
    </CssBox>
  );
}

export default AdvertItem;
