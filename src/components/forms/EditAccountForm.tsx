import { TextArea } from "@ui/TextArea/TextArea.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { SyntheticEvent } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";
import { UserResponse } from "@backendTypes";
import { useValidationForm } from "@hooks/useValidationForm";
import { ValidationInput } from "@ui/Input/ValidationInput.tsx";
import { PHONE_NUMBER_REGEXP } from "@constants/regexp.constant.ts";

enum InputName {
  FULL_NAME = "fullName",
  PHONE = "phone",
  BIO = "bio",
  PASSWORD = "password",
}
export const EditAccountForm = () => {
  const { fullName, phone } = useRouteLoaderData(
    PageRoute.HOME
  ) as UserResponse;

  const { formState, onChange } = useValidationForm([
    {
      defaultValue: fullName,
      errorPrefix: "Full Name:",
      uniqueName: InputName.FULL_NAME,
      validationData: {
        includeSpace: true,
        minLength: 1,
        maxLength: 255,
      },
    },
    {
      defaultValue: phone ?? "",
      errorPrefix: "Phone:",
      uniqueName: InputName.PHONE,
      validationData: {
        canBeEmpty: true,
        includeSpace: true,
        match: {
          regexp: PHONE_NUMBER_REGEXP,
          errorMessage: "It's a valid phone number?",
        },
      },
      attributes: {
        placeholder: "Enter your phone number...",
      },
    },
    {
      defaultValue: "",
      errorPrefix: "Bio:",
      uniqueName: InputName.BIO,
      validationData: {},
      attributes: {
        placeholder: "Enter your bio...",
      },
    },
    {
      defaultValue: "",
      errorPrefix: "Password:",
      uniqueName: InputName.PASSWORD,
      validationData: {
        minLength: 8,
        maxLength: 255,
        canBeEmpty: true,
      },
      attributes: {
        placeholder: "Enter new password... ",
      },
    },
  ]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex w-full flex-col items-center" onSubmit={handleSubmit}>
      {formState.map(({ attributes, uniqueName, error, value, prefix }) => {
        const m = {
          key: uniqueName,
          className: "w-full",
          label: prefix,
          name: uniqueName,
          value,
          error,
          ...attributes,
          onChange,
          wrapperClassName: "w-4/5",
        };
        return uniqueName === InputName.BIO ? (
          <TextArea {...m} />
        ) : (
          <ValidationInput {...m} />
        );
      })}
      <Button className="w-1/3 px-8 py-2 text-xl">Save</Button>
    </form>
  );
};
