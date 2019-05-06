import { localeModule } from '../LocaleProvider/LocaleDucks'
import { store } from "../_helpers/store";
export default function getText(code) {
  const { messages } = store.getState()[localeModule];
  if (messages.hasOwnProperty(code)) {
    return messages[code];
  } else {
    return code;
  }
}
