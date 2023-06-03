import { ValidationInput } from "@ui/Input/ValidationInput.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { SocialButtonsGroup } from "@components/SocialButtons/SocialButtonsGroup.tsx";
export const LoginForm = () => {
  return (
    <form className="flex flex-col items-center justify-center">
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
      <Button className="w-4/5">LOGIN</Button>
      <SocialButtonsGroup />

      <p className="m-3 w-full pb-2 text-center text-sm font-bold text-emerald-50/90">
        Don't have account yet?{" "}
        <span className="ml-1 cursor-pointer font-bold uppercase text-emerald-800 transition-all hover:underline">
          Register
        </span>
      </p>
    </form>
  );
};
