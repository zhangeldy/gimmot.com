import React from "react";
import { CssBox } from "./AdvertItemStyle";
import UserItem from "../UserItem/UserItem";
import Marks from "../Marks/Marks";
import Comments from "../Comments/Comments";
import StarIcon from "@material-ui/icons/GradeOutlined";
import withTranslation from "../_hoc/withTranslation";
import IconButton from "../../_ui/Button/IconButton";

function AdvertItem({ t }) {
  return (
    <CssBox className="paper my2">
      <div className="ai">
        <IconButton
          style={{ padding: 0, marginLeft: 10, marginTop: -5 }}
          tooltip={t("advertItem_addFavorites")}
          icon={<StarIcon fontSize="small" />}
        />
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

export default withTranslation(AdvertItem);
