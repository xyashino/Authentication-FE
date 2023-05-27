import { ValidationInput } from "@ui/Input/ValidationInput.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { SocialButtonsGroup } from "@components/SocialButtonsGroup/SocialButtonsGroup.tsx";

export const LoginForm = () => {
  return (
    <form className="flex flex-col justify-center items-center">
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

      <p className="text-sm m-3 text-gray-700 pb-2 w-full text-center">
        Don't have account yet?{" "}
        <span className="font-bold ml-1 text-emerald-600 hover:underline cursor-pointer">
          Register
        </span>
      </p>
    </form>
  );
};
