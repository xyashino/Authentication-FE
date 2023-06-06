import { AxiosSetup } from "@utils/network/axios-setup.ts";
import { Api } from "@enums/api.enum.ts";
import { AxiosError } from "axios";
import { UserCreate } from "@backendTypes";
import { handleErrors } from "@utils/handle-errors.ts";

export const validateData = (registerData: UserCreate) => {
  const { password, email, fullName } = registerData;
  if (!email || !password) throw new Error("Please fill all fields");
  if (email.length < 3) throw new Error("Email is too short");
  if (!email.includes("@")) throw new Error("Email is not valid");
  if (password.length < 8) throw new Error("Password is too short");
  if (fullName.length < 1) throw new Error("Full name is too short");
  return registerData;
};

export const registerUser = async (registerData: UserCreate) => {
  try {
    const filteredData = validateData(registerData);
    const { data } = await AxiosSetup.post(Api.REGISTER, filteredData);
    return data;
  } catch (error) {
    handleErrors(error as Error | AxiosError);
  }
};
