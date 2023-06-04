import { ValidationInput } from "@ui/Input/ValidationInput.tsx";
import { SocialButtonsGroup } from "@components/SocialButtons/SocialButtonsGroup.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { useValidationForm } from "@hooks/useValidationForm";

enum InputNames {
  EMAIL = "email",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirmPassword",
  FULL_NAME = "fullName",
}
export const RegistrationForm = () => {
  const { onChange, formState, isFormValid } = useValidationForm([
    {
      uniqueName: InputNames.FULL_NAME,
      errorPrefix: "Full name",
      defaultValue: "",
      validationData: {
        minLength: 3,
        maxLength: 255,
        includeSpace: true,
      },
      attributes: {
        type: "text",
        icon: "mdi:account",
        placeholder: "John Doe",
        label: "Full name:",
      },
    },
    {
      uniqueName: InputNames.EMAIL,
      errorPrefix: "Email",
      defaultValue: "",
      validationData: {
        minLength: 5,
        maxLength: 255,
        specialChars: ["@", "."],
      },
      attributes: {
        type: "email",
        icon: "mdi:email",
        placeholder: "example@domain.com",
        label: "Email:",
      },
    },
    {
      uniqueName: InputNames.PASSWORD,
      errorPrefix: "Password",
      defaultValue: "",
      validationData: {
        minLength: 8,
        maxLength: 255,
      },
      attributes: {
        type: "password",
        icon: "mdi:lock",
        placeholder: "*********",
        label: "Password:",
      },
    },
    {
      uniqueName: InputNames.CONFIRM_PASSWORD,
      errorPrefix: "",
      defaultValue: "",
      validationData: {
        minLength: 8,
      },
      attributes: {
        type: "password",
        icon: "mdi:lock",
        placeholder: "*********",
        label: "Confirm Password:",
      },
    },
  ]);

  return (
    <form className="flex flex-col items-center justify-center">
      {formState.map(({ attributes, value, uniqueName, error }) => (
        <ValidationInput
          key={uniqueName}
          error={error ?? null}
          value={value}
          name={uniqueName}
          onChange={onChange}
          {...attributes}
        />
      ))}
      <Button className="w-4/5" disabled={isFormValid}>
        Create
      </Button>
      <SocialButtonsGroup />
    </form>
  );
};
