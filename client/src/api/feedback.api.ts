import axios from "axios";

import { FeedbackData } from "../types/feedback";

export const addFeedback = async (data: FeedbackData): Promise<string> => {
  const result = await axios({
    url: "http://localhost:3000/feedback/add",
    method: "POST",
    data: {
      data,
    },
    withCredentials: true,
  });

  return result.data.message;
};
