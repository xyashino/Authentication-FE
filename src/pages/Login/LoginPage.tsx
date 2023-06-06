import { AuthenticationCard } from "@components/layout/AuthenticationCard/AuthenticationCard.tsx";
import { AuthorInfo } from "@ui/AuthorInfo/AuthorInfo.tsx";
import { AuthenticationPrompt } from "@ui/AuthenticationPrompt/AuthenticationPrompt.tsx";
import { PageRoute } from "@enums/page-route.enum.ts";
import { LoginForm } from "@components/forms/LoginForm/LoginForm.tsx";

export const LoginPage = () => {
  return (
    <>
      <AuthenticationCard>
        <h3 className="w-5/6 text-center text-lg font-bold capitalize text-gray-700">
          welcome again !
        </h3>
        <LoginForm />
        <AuthenticationPrompt
          question="Don't have an account yet?"
          linkText="Register"
          linkTo={PageRoute.REGISTER}
        />
      </AuthenticationCard>
      <AuthorInfo />
    </>
  );
};
