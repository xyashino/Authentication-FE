import { AxiosError, isAxiosError } from "axios";

export const handleErrors = (error: Error | AxiosError) => {
  let message = (error as Error).message ?? "Unknown error";

  if (isAxiosError(error)) {
    message =
      error.response?.data.message ??
      error.response?.data.error ??
      error.message;
  }

  throw new Error(Array.isArray(message) ? message.join("\n") : message);
};
