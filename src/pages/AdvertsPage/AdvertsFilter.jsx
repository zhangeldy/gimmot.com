import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/GradeOutlined";
import FilterIcon from "@material-ui/icons/FilterList";
import Tooltip from "@material-ui/core/Tooltip";
import withTranslation from "../../_hoc/withTranslation";
import { Filter } from "./AdvertsStyle";
import InputBase from "@material-ui/core/InputBase";

function AdvertsFilter({ t }) {
  const [openBlock, setOpenBlock] = useState(false);
  const [text, setText] = useState("");
  return (
    <Filter className="paper my2 p1" onBlur={() => setOpenBlock(false)}>
      <InputBase
        onFocus={() => setOpenBlock(true)}
        onChange={ev => {
          let value = ev.target.value.replace(String.fromCharCode(10), "");
          if (value.length < 200) {
            setText(value);
          }
        }}
        placeholder={t("advertsFilter_addAdvert")}
        multiline
        rowsMax="2"
        fullWidth
        value={text}
        style={{ overflow: 'hidden'}}
      />
      {!openBlock && (
        <div className="right">
          <Tooltip title={t("advertsFilter_favorites")} placement="top">
            <IconButton
              style={{ padding: 5, marginLeft: 5 }}
              children={<StarIcon fontSize="small" />}
            />
          </Tooltip>
          <Tooltip title={t("advertsFilter_filter")} placement="top">
            <IconButton
              style={{ padding: 5, marginLeft: 5 }}
              children={<FilterIcon fontSize="small" />}
            />
          </Tooltip>
        </div>
      )}
    </Filter>
  );
}

export default withTranslation(AdvertsFilter);
