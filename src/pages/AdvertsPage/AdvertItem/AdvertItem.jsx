import React from "react";
import UserItem from "../../../components/UserItem/UserItem";
import Marks from "../Marks/Marks";
import Comments from "../Comments/Comments";
import StarIcon from "@material-ui/icons/GradeOutlined";
import withTranslation from "../../../components/_hoc/withTranslation";
import IconButton from "../../../_ui/Button/IconButton";
import Paper from '@material-ui/core/Paper'

function AdvertItem({ t }) {
  return (
    <Paper className="mt2">
      <div className="p2">
        <IconButton
          style={{ padding: 0, marginLeft: 10, marginTop: -5 }}
          tooltip={t("advertItem_addFavorites")}
          icon={<StarIcon fontSize="small" />}
        />
        <div className="right imperceptible">18 мая в 18:13</div>
        <UserItem advert />
        <div className="py1" style={{ fontSize: 15 }}>
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
        </div>
        <Marks />
      </div>
      <Comments />
    </Paper>
  );
}

export default withTranslation(AdvertItem);
