import { AxiosSetup } from "@utils/network/axios-setup.ts";
import { Api } from "@enums/api.enum.ts";
import { isAxiosError } from "axios";
import { UserUpdate } from "@backendTypes";
export const URL_REGEXP =
  /(https?:\/\/)?(www\.)?[a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

const MAX_FILE_SIZE = 1024 * 1024 * 7;

const AllowedMimeTypes = [
  "image/jpeg",
  "image/gif",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const validateAvatar = (avatar: null | File | string) => {
  if (!avatar) throw new Error("Please select an avatar");

  if (typeof avatar === "string" && !URL_REGEXP.test(avatar)) {
    throw new Error("Please enter a valid URL");
  }
  if (typeof avatar === "string") return avatar;

  if (avatar.size > MAX_FILE_SIZE)
    throw new Error("File is too large. Max file size is 10MB");
  if (!AllowedMimeTypes.includes(avatar.type))
    throw new Error("File type not allowed");

  return avatar;
};

export const changeAvatar = async (
  userId: string,
  avatar: null | File | string
) => {
  try {
    const validatedData = validateAvatar(avatar);

    if (typeof validatedData === "string") {
      const { data } = await AxiosSetup.patch(`${Api.USERS}/${userId}`, {
        avatar: validatedData,
      } as UserUpdate);
      return data;
    }

    const formData = new FormData();
    formData.append("avatar", validatedData);

    const { data } = await AxiosSetup.post(
      `${Api.UPLOAD_AVATAR}/${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    let errorMessage = (error as Error).message ?? "Unknown error";
    if (isAxiosError(error)) {
      errorMessage =
        error.response?.data.message ??
        error.response?.data.error ??
        error.message;
    }

    throw new Error(
      Array.isArray(errorMessage) ? errorMessage.join("\n") : errorMessage
    );
  }
};
