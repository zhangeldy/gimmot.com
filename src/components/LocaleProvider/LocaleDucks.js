import { createReducer } from "redux-starter-kit";
import { RU_TRANSLATION } from "../../_translation/ru";
import { KK_TRANSLATION } from "../../_translation/kk";
import { EN_TRANSLATION } from "../../_translation/en";

/**
 * Constants
 */

export const localeModule = "locale";
export const CHANGE = `${localeModule}/CHANGE`;

/**
 * Reducer
 */

const initialState = {
  lang: RU_TRANSLATION.lang,
  messages: RU_TRANSLATION.messages
};

export default createReducer(initialState, {
  [CHANGE]: (state, action) => ({
    lang: action.lang,
    messages: action.messages
  })
});

/**
 * Actions
 */

export const changeLocale = lang => {
  localStorage.setItem("lang", lang);

  let messages = RU_TRANSLATION.messages;
  if (lang === "kk") messages = KK_TRANSLATION.messages;
  if (lang === "en") messages = EN_TRANSLATION.messages;

  return {
    type: CHANGE,
    lang: lang,
    messages: messages
  };
};
