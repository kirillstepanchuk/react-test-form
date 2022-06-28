import { AddFeedbackActionTypes } from "./../actionTypes";
import { SagaIterator } from "redux-saga";
import { put, call, takeEvery } from "redux-saga/effects";

import { addFeedback } from "../../api/feedback.api";
import {
  AddFeedbackAction,
  addNewFeedbackError,
  addNewFeedbackSuccess,
} from "./../actions/addFeedback";
import handleError, { ErrorType } from "../../utils/handleError";

export function* addNewFeedback(action: AddFeedbackAction): SagaIterator<void> {
  try {
    const data: string = yield call(addFeedback, action.payload);
    yield put(addNewFeedbackSuccess(data));
  } catch (e) {
    yield put(addNewFeedbackError(handleError(e as ErrorType)));
  }
}

export default function* feedbackWatcher() {
  yield takeEvery(AddFeedbackActionTypes.ADD_FEEDBACK, addNewFeedback);
}
