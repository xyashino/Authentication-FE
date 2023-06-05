import { ValidationInput } from "@ui/Input/ValidationInput.tsx";
import { SocialButtonsGroup } from "@components/SocialButtons/SocialButtonsGroup.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { useValidationForm } from "@hooks/useValidationForm";
import { registerUser } from "@components/forms/RegistrationForm/RegistrationForm.helper.ts";
import { FormEvent } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";

enum InputNames {
  EMAIL = "email",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirmPassword",
  FULL_NAME = "fullName",
}
export const RegistrationForm = () => {
  const navigate = useNavigate();

  const { onChange, formState, isFormValid, getFormStateAsMap } =
    useValidationForm([
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    const formData = getFormStateAsMap();
    const registerPromise = registerUser({
      email: formData.get(InputNames.EMAIL) ?? "",
      password: formData.get(InputNames.PASSWORD) ?? "",
      fullName: formData.get(InputNames.FULL_NAME) ?? "",
    });

    toast.promise(registerPromise, {
      loading: "Creating Account...",
      error: (err) => `${err}`,
      success: () => {
        navigate(PageRoute.LOGIN);
        return "Account created successfully!... Redirecting to login page.";
      },
    });
  };

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
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
      <Button className="w-4/5" disabled={!isFormValid}>
        Create
      </Button>
      <SocialButtonsGroup />
    </form>
  );
};
