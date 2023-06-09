import { AuthenticationCard } from "@components/layout/AuthenticationCard/AuthenticationCard.tsx";
import { AuthorInfo } from "@ui/AuthorInfo/AuthorInfo.tsx";
import { AuthenticationPrompt } from "@ui/AuthenticationPrompt/AuthenticationPrompt.tsx";
import { PageRoute } from "@enums/page-route.enum.ts";
import { RegistrationForm } from "@components/forms/RegistrationForm/RegistrationForm.tsx";

export const RegistrationPage = () => {
  return (
    <>
      <AuthenticationCard>
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
