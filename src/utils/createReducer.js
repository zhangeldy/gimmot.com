import { createReducer as createReducerRedux } from "redux-starter-kit";

export default function createReducer(initialState, actionsMap) {
  let newActionsMap = {};
  for (let [key, item] of Object.entries(actionsMap)) {
    newActionsMap[key] = item;
    if (item === "action") {
      newActionsMap[key] = (state, action) => {
        for (const actionKey of Object.keys(action)) {
          if (actionKey !== "type") {
            state[actionKey] = action[actionKey];
          }
        }
      };
    }
  }
  return createReducerRedux(initialState, newActionsMap);
}
