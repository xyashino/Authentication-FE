import { AxiosSetup } from "@utils/network/axios-setup.ts";
import { Api } from "@enums/api.enum.ts";
import { AxiosError } from "axios";
import { Login } from "@backendTypes";
import { handleErrors } from "@utils/handle-errors.ts";

export const validateData = ({ password, email }: Login) => {
  if (!email || !password) throw new Error("Please fill all fields");
  if (email.length < 3) throw new Error("Email is too short");
  if (!email.includes("@")) throw new Error("Email is not valid");
  if (password.length < 8) throw new Error("Password is too short");
  return { email, password };
};

export const loginUser = async (loginData: Login) => {
  try {
    const filteredData = validateData(loginData);
    const { data } = await AxiosSetup.post(Api.LOGIN, filteredData);
    return data;
  } catch (error) {
    handleErrors(error as Error | AxiosError);
  }
};
