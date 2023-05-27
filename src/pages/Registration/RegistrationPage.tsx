import { AuthenticationCard } from "../../components/layout/AuthenticationCard/AuthenticationCard.tsx";
import { RegistrationForm } from "../../components/forms/RegistrationForm.tsx";

export const RegistrationPage = () => {
  return (
    <>
      <AuthenticationCard>
        <h3 className="text-lg w-5/6 text-gray-700 font-bold capitalize text-center">
          Create Account
        </h3>
        <RegistrationForm />
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
