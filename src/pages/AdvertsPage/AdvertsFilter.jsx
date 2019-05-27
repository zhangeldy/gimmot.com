import React from "react";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/GradeOutlined";
import FilterIcon from "@material-ui/icons/FilterList";
import Tooltip from "@material-ui/core/Tooltip";
import withTranslation from "../../_hoc/withTranslation";
import { Filter } from "./AdvertsStyle"

function AdvertsFilter({ t }) {
  return (
    <Filter className="paper my2 p1">
      <input placeholder={t('advertsFilter_addAdvert')}/>
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
    </Filter>
  );
}

export default withTranslation(AdvertsFilter);
