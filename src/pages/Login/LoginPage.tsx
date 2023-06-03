import { AuthenticationCard } from "@components/layout/AuthenticationCard/AuthenticationCard.tsx";
import { LoginForm } from "@components/forms/LoginForm.tsx";
import { AuthorInfo } from "@ui/AuthorInfo/AuthorInfo.tsx";

export const LoginPage = () => {
  return (
    <>
      <AuthenticationCard>
        <h3 className="w-5/6 text-center text-lg font-bold capitalize text-gray-700">
          welcome again !
        </h3>
        <LoginForm />
      </AuthenticationCard>
      <AuthorInfo />
    </>
  );
};
