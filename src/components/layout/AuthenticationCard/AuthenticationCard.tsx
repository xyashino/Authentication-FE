import { PropsWithChildren } from "react";
import { Logo } from "../../UI/Logo/Logo.tsx";

export const AuthenticationCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-w-96 h-auto bg-sky-50 rounded-xl shadow-xl p-4 flex flex-col justify-center items-center">
      <Logo />
      {children}
    </div>
  );
};
