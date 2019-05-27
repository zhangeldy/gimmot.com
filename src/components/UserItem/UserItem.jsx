import React from "react";
import { CssBox } from "./UserItemStyle";

const imgLink =
  "https://instagram.fhrk1-1.fna.fbcdn.net/vp/c85b746a2f0be3f5007ea21ca05da4b4/5D5E57CC/t51.2885-19/s150x150/16124354_1343066049065271_4431176462896201728_n.jpg?_nc_ht=instagram.fhrk1-1.fna.fbcdn.net";

function UserItem({ short }) {
  if (short) {
    return (
      <CssBox className="flex flex-wrap">
        <div className="col user-name mr1">Жангельды, 29</div>
        <div className="col user-params">Астана, Гетеро, 170/55/16</div>
      </CssBox>
    );
  }

  return (
    <CssBox className="clearfix">
      <div className="col">
        <div className="user-item">
          <img src={imgLink} alt="user item" />
          <div className="is-online" />
        </div>
      </div>
      <div className="col ml2">
        <div className="user-name">Жангельды, 29</div>
        <div className="user-params">Астана, Гетеро, 170/55/16</div>
      </div>
    </CssBox>
  );
}

export default UserItem;
