import axios, { AxiosError } from "axios";
import { UNDEFINED_ERROR } from "../constants";

export interface ErrorType {
  response: {
    data: {
      message: string;
    };
  };
}

export default function handleError(e: ErrorType) {
  if (axios.isAxiosError(e)) {
    if (!e.response?.data.message) {
      return UNDEFINED_ERROR;
    }
    return `${e.response?.data.message}`;
  }
  return String(e);
}
