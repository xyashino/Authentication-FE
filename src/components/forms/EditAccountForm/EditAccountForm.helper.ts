import { AxiosSetup } from "@utils/network/axios-setup.ts";
import { Api } from "@enums/api.enum.ts";
import { AxiosError } from "axios";
import { UserUpdate } from "@backendTypes";
import { handleErrors } from "@utils/handle-errors.ts";

export const validateUserData = (data: Partial<UserUpdate>) => {
  const { password, phone, fullName } = data;

  if (password) {
    if (password.length < 8) throw Error("Password is too short");
    if (password.length > 255) throw Error("Password is too long");
  }

  if (phone && phone.length < 9) throw Error("Phone number is too short");

  if (fullName && fullName.length < 3) throw Error("Full name is too short");

  return data;
};

const removeEmptyFields = <T extends object>(data: T): Partial<T> => {
  for (const key in data) {
    if (data[key] === undefined || data[key] === "") {
      delete data[key];
    }
  }
  return data;
};

export const updateUserDetails = async (
  userId: string,
  userData: UserUpdate
) => {
  try {
    const cleanedData = removeEmptyFields(userData);
    const validatedData = validateUserData(cleanedData);
    const { data } = await AxiosSetup.patch(
      `${Api.USERS}/${userId}`,
      validatedData
    );
    return data;
  } catch (error) {
    handleErrors(error as Error | AxiosError);
  }
};
