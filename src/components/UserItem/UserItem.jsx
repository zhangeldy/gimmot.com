import React from "react";
import { CssBox } from "./UserItemStyle";

const imgLink =
  "https://instagram.fhrk1-1.fna.fbcdn.net/vp/c85b746a2f0be3f5007ea21ca05da4b4/5D5E57CC/t51.2885-19/s150x150/16124354_1343066049065271_4431176462896201728_n.jpg?_nc_ht=instagram.fhrk1-1.fna.fbcdn.net";

function UserItem() {
  return (
    <CssBox className="clearfix">
      <div className="col">
        <div className="user-item">
          <img src={imgLink} alt="user item" />
          <div className="is-online" />
        </div>
      </div>
      <div className="col ml2">
        <div className="colorPrimary user-name">Жангельды, 29</div>
        <div className="imperceptible">Астана, Гетеро, 170-55-16</div>
      </div>
    </CssBox>
  );
}

export default UserItem;
