import { FeedbackData } from "../../types/feedback";
import { AddFeedbackActionTypes } from "../actionTypes";

export interface AddFeedbackAction {
  type: AddFeedbackActionTypes.ADD_FEEDBACK;
  payload: FeedbackData;
}

interface AddFeedbackSuccessAction {
  type: AddFeedbackActionTypes.ADD_FEEDBACK_SUCCESS;
  payload: string;
}

interface AddFeedbackErrorAction {
  type: AddFeedbackActionTypes.ADD_FEEDBACK_ERROR;
  payload: string;
}

export type AddFeedbackActions =
  | AddFeedbackAction
  | AddFeedbackSuccessAction
  | AddFeedbackErrorAction;

const addNewFeedback = (data: FeedbackData): AddFeedbackAction => ({
  type: AddFeedbackActionTypes.ADD_FEEDBACK,
  payload: data,
});

export const addNewFeedbackSuccess = (
  data: string
): AddFeedbackSuccessAction => ({
  type: AddFeedbackActionTypes.ADD_FEEDBACK_SUCCESS,
  payload: data,
});

export const addNewFeedbackError = (error: string): AddFeedbackErrorAction => ({
  type: AddFeedbackActionTypes.ADD_FEEDBACK_ERROR,
  payload: error,
});

export default addNewFeedback;
