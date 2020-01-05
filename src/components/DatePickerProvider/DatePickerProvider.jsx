import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import "moment/locale/kk";
import "moment/locale/ru";

import withTranslation from '../_hoc/withTranslation';

function DatePickerProvider({ lang, children }) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={lang}>
      {children}
    </MuiPickersUtilsProvider>
  );
}

export default withTranslation(DatePickerProvider);
