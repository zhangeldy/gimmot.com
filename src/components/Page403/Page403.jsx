import React from "react";
import withTranslation from "../../_hoc/withTranslation";
import { CssBox } from "./Page403Style";
import Button from "../../_ui/Button/Button";
import { Link } from "react-router-dom";

function Page403({ t }) {
  return (
    <CssBox>
      <div className="container">
        <div className="error">403</div>
        <div className="oops">{t("page403_oops")}</div>
        <div className="not-found">{t("page403_access")}</div>
        <Link to="/">
          <Button text={t("page403_toHome")} size="large" />
        </Link>
      </div>
    </CssBox>
  );
}

export default withTranslation(Page403);
