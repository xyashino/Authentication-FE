import { ValidationInput } from "@ui/Input/ValidationInput.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { SocialButtonsGroup } from "@components/SocialButtons/SocialButtonsGroup.tsx";
import { useValidationForm } from "@hooks/useValidationForm";

enum InputNames {
  EMAIL = "email",
  PASSWORD = "password",
}
export const LoginForm = () => {
  const { onChange, formState, isFormValid } = useValidationForm([
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
  ]);

  return (
    <form className="flex flex-col items-center justify-center">
      {formState.map(({ error, attributes, uniqueName, value }) => (
        <ValidationInput
          key={uniqueName}
          error={error}
          value={value}
          name={uniqueName}
          onChange={onChange}
          {...attributes}
        />
      ))}

      <Button className="w-4/5" disabled={!isFormValid}>
        LOGIN
      </Button>
      <SocialButtonsGroup />
    </form>
  );
};
