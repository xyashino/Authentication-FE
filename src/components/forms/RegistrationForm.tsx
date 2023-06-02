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
      <p className="text-sm m-3 text-emerald-50 font-bold pb-1 w-full text-center">
        Already member?{" "}
        <span className="font-bold ml-1 text-emerald-900 hover:underline cursor-pointer uppercase">
          Login
        </span>
      </p>
    </form>
  );
};
