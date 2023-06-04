import { AuthenticationCard } from "@components/layout/AuthenticationCard/AuthenticationCard.tsx";
import { RegistrationForm } from "@components/forms/RegistrationForm.tsx";
import { AuthorInfo } from "@ui/AuthorInfo/AuthorInfo.tsx";
import { AuthenticationPrompt } from "@ui/AuthenticationPrompt/AuthenticationPrompt.tsx";
import { PageRoute } from "@enums/page-route.enum.ts";

export const RegistrationPage = () => {
  return (
    <>
      <AuthenticationCard>
        <h3 className="text-center text-lg font-bold capitalize text-gray-700">
          Create Account
        </h3>
        <RegistrationForm />
        <AuthenticationPrompt
          question="Already member?"
          linkText="Login"
          linkTo={PageRoute.LOGIN}
        />
      </AuthenticationCard>
      <AuthorInfo />
    </>
  );
};
