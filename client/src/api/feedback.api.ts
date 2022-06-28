import axios from "axios";

import { SERVICE_URL } from "../constants";
import { FeedbackData } from "../types/feedback";

export const addFeedback = async (data: FeedbackData): Promise<string> => {
  const result = await axios({
    url: `${SERVICE_URL}/feedback/add`,
    method: "POST",
    data: {
      data,
    },
    withCredentials: true,
  });

  return result.data.message;
};
