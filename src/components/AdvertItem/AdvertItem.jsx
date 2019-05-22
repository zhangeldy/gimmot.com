import React from "react";
import { CssBox } from "./AdvertItemStyle"

function AdvertItem(props) {
  return (
    <CssBox>
      <div className="clearfix">
        <div className="col">
          <div className="user-item">userItem</div>
        </div>
        <div className="col">
          <div className="user-name">user name</div>
          <div className="user-params">user params</div>
        </div>
        <div className="right">time</div>
      </div>
      <div className="caption">Advert caption</div>
      <div className="text">
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
      </div>
    </CssBox>
  );
}

export default AdvertItem;
