import { FeedbackData } from "../../types/feedback";
import { AddFeedbackActions } from "../actions/addFeedback";
import { AddFeedbackActionTypes } from "../actionTypes";

export interface FeedbackState {
  data: null | FeedbackData;
  error: string;
  loading: boolean;
}

export const initialState: FeedbackState = {
  data: null,
  error: "",
  loading: false,
};

const feedback = (
  state: FeedbackState = initialState,
  action: AddFeedbackActions
) => {
  switch (action.type) {
    case AddFeedbackActionTypes.ADD_FEEDBACK:
      return {
        ...state,
        loading: true,
      };
    case AddFeedbackActionTypes.ADD_FEEDBACK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case AddFeedbackActionTypes.ADD_FEEDBACK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default feedback;
