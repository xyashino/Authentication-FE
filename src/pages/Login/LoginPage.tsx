import { AuthenticationCard } from "@components/layout/AuthenticationCard/AuthenticationCard.tsx";
import { LoginForm } from "@components/forms/LoginForm.tsx";
import { AuthorInfo } from "@ui/AuthorInfo/AuthorInfo.tsx";

export const LoginPage = () => {
  return (
    <>
      <AuthenticationCard>
        <h3 className="text-lg w-5/6 text-gray-700 font-bold capitalize text-center">
          welcome again !
        </h3>
        <LoginForm />
      </AuthenticationCard>
      <AuthorInfo />
    </>
  );
};
