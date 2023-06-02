import { AuthenticationCard } from "@components/layout/AuthenticationCard/AuthenticationCard.tsx";
import { RegistrationForm } from "@components/forms/RegistrationForm.tsx";
import { AuthorInfo } from "@ui/AuthorInfo/AuthorInfo.tsx";

export const RegistrationPage = () => {
  return (
    <>
      <AuthenticationCard>
        <h3 className="text-lg text-gray-700 font-bold capitalize text-center">
          Create Account
        </h3>
        <RegistrationForm />
      </AuthenticationCard>
      <AuthorInfo />
    </>
  );
};
