import { PropsWithChildren } from "react";
import { Logo } from "@ui/Logo/Logo.tsx";

export const AuthenticationCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3  h-auto bg-sky-50/20 rounded-xl shadow-xl p-4 flex flex-col justify-center items-center z-10">
      <Logo />
      {children}
    </div>
  );
};
