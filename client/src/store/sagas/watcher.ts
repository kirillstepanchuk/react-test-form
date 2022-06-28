import { all } from "redux-saga/effects";
import feedbackWatcher from "./feedbackWorker";

export default function* sagaWatcher() {
  yield all([feedbackWatcher()]);
}
