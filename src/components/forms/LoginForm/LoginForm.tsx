import { ValidationInput } from "@ui/Input/ValidationInput.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { SocialButtonsGroup } from "@components/SocialButtons/SocialButtonsGroup.tsx";
import { useValidationForm } from "@hooks/useValidationForm";
import { FormEvent } from "react";
import { loginUser } from "@components/forms/LoginForm/LoginForm.helper.ts";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PageRoute } from "@enums/page-route.enum.ts";

enum InputNames {
  EMAIL = "email",
  PASSWORD = "password",
}
export const LoginForm = () => {
  const navigate = useNavigate();

  const { onChange, formState, isFormValid, getFormStateAsMap } =
    useValidationForm([
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) return;
    const formData = getFormStateAsMap();

    const email = formData.get(InputNames.EMAIL);
    const password = formData.get(InputNames.PASSWORD);

    if (!email || !password) return;

    const toastPromise = loginUser({ email, password });
    toast.promise(toastPromise, {
      loading: "Logging in...",
      success: () => {
        navigate(PageRoute.HOME);
        return "Logged in successfully!";
      },
      error: (err) => `${err}`,
    });
  };
  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
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
