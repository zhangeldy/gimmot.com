import React, { useState } from "react";
import StarIcon from "@material-ui/icons/GradeOutlined";
import FilterIcon from "@material-ui/icons/FilterList";
import withTranslation from "../../_hoc/withTranslation";
import { Filter } from "./AdvertsStyle";
import Button from "../../_ui/Button/Button";
import IconButton from "../../_ui/Button/IconButton";

function AdvertsFilter({ t }) {
  const [isOpen, openBlock] = useState(false);

  return (
    <Filter className="paper my2 p1">
      <Button text={t("advertsFilter_addAdvert")} size="small" />
      {!isOpen && (
        <div className="right">
          <IconButton
            tooltip={t("advertsFilter_favorites")}
            style={{ padding: 5, marginLeft: 5 }}
            icon={<StarIcon fontSize="small" />}
          />
          <IconButton
            tooltip={t("advertsFilter_filter")}
            style={{ padding: 5, marginLeft: 5 }}
            icon={<FilterIcon fontSize="small" />}
          />
        </div>
      )}
    </Filter>
  );
}

export default withTranslation(AdvertsFilter);
