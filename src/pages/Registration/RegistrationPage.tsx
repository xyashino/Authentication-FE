import { AuthenticationCard } from "@components/layout/AuthenticationCard/AuthenticationCard.tsx";
import { RegistrationForm } from "@components/forms/RegistrationForm.tsx";
import { AuthorInfo } from "@ui/AuthorInfo/AuthorInfo.tsx";

export const RegistrationPage = () => {
  return (
    <>
      <AuthenticationCard>
        <h3 className="text-center text-lg font-bold capitalize text-gray-700">
          Create Account
        </h3>
        <RegistrationForm />
      </AuthenticationCard>
      <AuthorInfo />
    </>
  );
};
