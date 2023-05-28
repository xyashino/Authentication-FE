import { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-screen min-w-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-emerald-100 to-emerald-900 overflow-x-hidden overflow-y-auto">
      {children}
    </div>
  );
};
