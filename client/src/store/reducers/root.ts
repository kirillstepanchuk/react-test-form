import { combineReducers } from "redux";

import feedback from "./feedback";

const root = combineReducers({
  feedback,
});

export type RootState = ReturnType<typeof root>;

export default root;
