import { AuthenticationCard } from "@components/layout/AuthenticationCard/AuthenticationCard.tsx";
import { LoginForm } from "@components/forms/LoginForm.tsx";

export const LoginPage = () => {
  return (
    <>
      <AuthenticationCard>
        <h3 className="text-lg w-5/6 text-gray-700 font-bold capitalize text-center">
          welcome again !
        </h3>
        <LoginForm />
      </AuthenticationCard>
      <p className="text-white font-bolder text-sm">
        Created by{" "}
        <a
          href="https://github.com/xyashino"
          className="appearance-none font-bold hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          xyashino
        </a>
      </p>
    </>
  );
};
