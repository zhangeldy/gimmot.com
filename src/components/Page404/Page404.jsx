import React from "react";
import withTranslation from "../../_hoc/withTranslation";
import { CssBox } from "./Page404Style";
import Button from "../../_ui/Button/Button";
import Translate from "../Translate";

function Page404({ t }) {
  return (
    <CssBox>
      <div className="error">404</div>
      <div className="oops">{t("page404_oops")}</div>
      <div className="not-found">
        <Translate id="page404_not_found" />
      </div>
      <Button text={t("page404_tohome")} size="large" />
    </CssBox>
  );
}

export default withTranslation(Page404);
