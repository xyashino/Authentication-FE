import { ValidationInput } from "@ui/Input/ValidationInput.tsx";
import { SocialButtonsGroup } from "@components/SocialButtons/SocialButtonsGroup.tsx";
export const RegistrationForm = () => {
  return (
    <form>
      <ValidationInput
        icon="mdi:email"
        label="Email:"
        hasError={false}
        errorMessage="test"
        placeholder="example@mail.com"
      />
      <ValidationInput
        icon="mdi:lock"
        label="Password:"
        hasError={true}
        errorMessage="Error message"
        placeholder="*********"
      />
      <ValidationInput
        icon="mdi:lock"
        label="confirm Password:"
        hasError={false}
        errorMessage="Error message"
        placeholder="*********"
      />
      <SocialButtonsGroup />
      <p className="m-3 w-full pb-1 text-center text-sm font-bold text-emerald-50">
        Already member?{" "}
        <span className="ml-1 cursor-pointer font-bold uppercase text-emerald-900 hover:underline">
          Login
        </span>
      </p>
    </form>
  );
};
