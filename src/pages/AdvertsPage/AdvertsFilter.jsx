import React, { useState } from "react";
import StarIcon from "@material-ui/icons/GradeOutlined";
import StarActiveIcon from "@material-ui/icons/Grade";
import FilterIcon from "@material-ui/icons/FilterList";
import AdvertActiveIcon from "@material-ui/icons/CalendarViewDay";
import AdvertIcon from "@material-ui/icons/CalendarViewDayOutlined";
import withTranslation from "../../_hoc/withTranslation";
import { Filter } from "./AdvertsStyle";
import Button from "../../_ui/Button/Button";
import IconButton from "../../_ui/Button/IconButton";

function AdvertsFilter({ t }) {
  const [active, setActive] = useState(null);

  return (
    <Filter className="paper my2 p1">
      <Button text={t("advertsFilter_addAdvert")} size="small" />
      <div className="flex">
        {!active && (
          <IconButton
            tooltip={t("advertsFilter_filter")}
            style={{ padding: 5, marginLeft: 5 }}
            icon={<FilterIcon />}
          />
        )}
        <IconButton
          tooltip={t("advertsFilter_favorites")}
          style={{ padding: 5, marginLeft: 5 }}
          onClick={() => setActive(active !== "favorites" ? "favorites" : null)}
          color={active === "favorites" ? "primary" : "default"}
          icon={active === "favorites" ? <StarActiveIcon /> : <StarIcon />}
        />
        <IconButton
          tooltip={t("advertsFilter_myAdverts")}
          style={{ padding: 5, marginLeft: 5 }}
          onClick={() => setActive(active !== "myAdverts" ? "myAdverts" : null)}
          color={active === "myAdverts" ? "primary" : "default"}
          icon={active === "myAdverts" ? <AdvertActiveIcon /> : <AdvertIcon />}
        />
      </div>
    </Filter>
  );
}

export default withTranslation(AdvertsFilter);
