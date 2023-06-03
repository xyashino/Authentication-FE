import { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-y-auto overflow-x-hidden bg-gradient-to-br from-emerald-100 to-emerald-900 max-w-screen min-w-screen">
      {children}
    </div>
  );
};
