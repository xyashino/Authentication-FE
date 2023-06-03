import { PropsWithChildren } from "react";
import { Logo } from "@ui/Logo/Logo.tsx";

export const AuthenticationCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="z-10 flex h-auto w-11/12 flex-col items-center justify-center rounded-xl bg-sky-50/20 p-4 shadow-xl md:w-3/4 lg:w-1/2 xl:w-1/3">
      <Logo />
      {children}
    </div>
  );
};
